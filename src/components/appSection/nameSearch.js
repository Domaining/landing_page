import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractAbi from "../../../utils/contractABI.json";
import { networks } from "../../../utils/networks";

const NameSearch = ({...props}) => {
  const {currentAccount, setCurrentAccount, connectWallet} = props;
  const tld = ".ftm";
  const CONTRACT_ADDRESS = "0xd5B6Eddb65a414c9b3C8E014fe17bD55F0C8562E";

  // Add some state data propertie
  const [network, setNetwork] = useState("");
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);
  const [record, setRecord] = useState("");
  const [editing, setEditing] = useState(false);
  const [mints, setMints] = useState([]);

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Fantom testnet
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0xfa" }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0xfa",
                  chainName: "Fantom Mainnet",
                  rpcUrls: ["https://rpc.fantom.network"],
                  nativeCurrency: {
                    name: "Fantom Mainnet",
                    symbol: "FTM",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://ftmscan.com/"],
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        }
        console.log(error);
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert(
        "MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html"
      );
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
    const chainId = await ethereum.request({ method: "eth_chainId" });
    setNetwork(networks[chainId]);

    ethereum.on("chainChanged", handleChainChanged);

    // Reload the page when they change networks
    function handleChainChanged(_chainId) {
      window.location.reload();
    }
  };

  const mintDomain = async () => {
    // Don't run if the domain is empty
    if (!domain) {
      return;
    }
    // Alert the user if the domain is too short
    if (domain.length < 3) {
      alert("Domain must be at least 3 characters long");
      return;
    }
    // Calculate price based on length of domain (change this to match your contract)
    // 3 chars = 0.5 FTM, 4 chars = 0.3 FTM, 5 or more = 0.1 FTM
    const price =
      domain.length === 3 ? "0.05" : domain.length === 4 ? "0.03" : "0.01";
    console.log("Minting domain", domain, "with price", price);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractAbi,
          signer
        );

        console.log("Going to pop wallet now to pay gas...");
        let tx = await contract.register(domain, {
          value: ethers.utils.parseEther(price),
        });
        // Wait for the transaction to be mined
        const receipt = await tx.wait();

        // Check if the transaction was successfully completed
        if (receipt.status === 1) {
          console.log(
            "Domain minted! https://testnet.ftmscan.com/tx/" + tx.hash
          );

          // Set the record for the domain
          tx = await contract.setRecord(domain, record);
          await tx.wait();

          console.log("Record set! https://testnet.ftmscan.com/tx/" + tx.hash);

          // Call fetchMints after 2 seconds
          setTimeout(() => {
            fetchMints();
          }, 2000);

          setRecord("");
          setDomain("");
        } else {
          alert("Transaction failed! Please try again");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMints = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        // You know all this
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractAbi,
          signer
        );

        // Get all the domain names from our contract
        const names = await contract.getAllNames();

        // For each name, get the record and the address
        const mintRecords = await Promise.all(
          names.map(async (name) => {
            const mintRecord = await contract.records(name);
            const owner = await contract.domains(name);
            return {
              id: names.indexOf(name),
              name: name,
              record: mintRecord,
              owner: owner,
            };
          })
        );

        console.log("MINTS FETCHED ", mintRecords);
        setMints(mintRecords);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // This will run any time currentAccount or network are changed
  useEffect(() => {
    if (network === "Fantom Testnet") {
      renderInputForm();
      fetchMints();
    }
  }, [currentAccount, network]);

  const updateDomain = async () => {
    if (!record || !domain) {
      return;
    }
    setLoading(true);
    console.log("Updating domain", domain, "with record", record);
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          CONTRACT_ADDRESS,
          contractAbi.abi,
          signer
        );

        let tx = await contract.setRecord(domain, record);
        await tx.wait();
        console.log("Record set https://testnet.ftmscan.com/tx/" + tx.hash);

        fetchMints();
        setRecord("");
        setDomain("");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  // Form to enter domain name and data
  const renderInputForm = () => {
    // If not on Fantom Testnet, render the switch button
    if (network !== "Fantom Testnet") {
      return (
        <div className="flex flex-col text-blue1 justify-center items-center">
          <h2>Please switch to Fantom Testnet</h2>
          {/* This button will call our switch network function */}
          <button
            className={[
              "my-4 font-bold bg-red-500 w-full  md:w-[450px] h-[56px] rounded-[40px] text-white",
            ].join(" ")}
            onClick={switchNetwork}
          >
            Click here to switch
          </button>
        </div>
      );
    }
    return (
      <div className="flex flex-col md:flex-col w-full  justify-center md:items-center font-extrabold mb-10">
        <div className="flex flex-row relative justify-end item-center">
          <input
            type="text"
            placeholder="Type your preferred name"
            className="w-full md:w-[450px] h-[56px] rounded-[100px] text-dark-grey px-6 mb-3"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <div className="flex-1" />
          <p className="absolute text-gray-400 py-4 mr-6"> {tld} </p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Your alias"
            className="w-full md:w-[450px] h-[56px] rounded-[100px] text-dark-grey px-6 mb-3"
            value={record}
            onChange={(e) => setRecord(e.target.value)}
          />
        </div>
        {/* If the editing variable is true, return the "Set record" and "Cancel" button */}
        {editing ? (
          <div className="flex flex-col">
            {/* This will call the updateDomain function we just made */}
            <button
              className={[
                "font-bold bg-blue1 w-full  md:w-[450px] h-[56px] rounded-[40px] text-white mb-3",
              ].join(" ")}
              disabled={loading}
              onClick={updateDomain}
            >
              Set record
            </button>
            {/* This will let us get out of editing mode by setting editing to false */}
            <button
              className={[
                "font-bold bg-red-500 w-full  md:w-[450px] h-[56px] rounded-[40px] text-white",
              ].join(" ")}
              onClick={() => {
                setEditing(false);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          // If editing is not true, the mint button will be returned instead
          <button
            className={[
              "font-bold bg-blue1 w-full  md:w-[450px] h-[56px] rounded-[40px] text-white",
            ].join(" ")}
            disabled={loading}
            onClick={mintDomain}
          >
            Mint
          </button>
        )}
      </div>
    );
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const renderMints = () => {
    if (currentAccount && mints.length > 0) {
      return (
        <div className="flex flex-col justify-center items-center">
          <p className="text-blue1"> Recently minted domains!</p>
          <div className="mint-list">
            {mints.map((mint, index) => {
              return (
                <>
                  <div className="flex flex-row relative" key={index}>
                    <div className="flex mx-auto px-6 mt-3 justify-between items-center h-[48px] w-[450px] rounded-[24px] bg-white text-gray-500 text-base">
                      <a
                        className="link"
                        href={`https://testnets.opensea.io/assets/mumbai/${CONTRACT_ADDRESS}/${mint.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="underlined">
                          {mint.name}
                          {tld}
                        </p>
                      </a>
                      {/* If mint.owner is currentAccount, add an "edit" button*/}
                      {mint.owner.toLowerCase() ===
                      currentAccount.toLowerCase() ? (
                        <button
                          className="edit-button"
                          onClick={() => editRecord(mint.name)}
                        >
                          <img
                            className="w-[14px]"
                            src="https://img.icons8.com/metro/26/000000/pencil.png"
                            alt="Edit button"
                          />
                        </button>
                      ) : null}
                    </div>
                    <p className="absolute bottom-0 px-6 text-gray-400 text-[10px] italic">
                      {" "}
                      {mint.record}{" "}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    }
  };

  // This will take us into edit mode and show us the edit buttons!
  const editRecord = (name) => {
    console.log("Editing record for", name);
    setEditing(true);
    setDomain(name);
  };
  return (
    <section>
      {currentAccount && renderInputForm()}
      {mints && renderMints()}
    </section>
  );
};

export default NameSearch;
