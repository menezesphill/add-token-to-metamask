const tokenAddress = "0xc630bd2f1df25736177B5126cD4F3bBc3714A3c5";
const tokenSymbol = "PHORSE";
const tokenDecimals = 18;
const tokenImage =
  "https://raw.githubusercontent.com/menezesphill/application_utils/main/logo.png";

//Check if the MetaMask extension is installed
const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

// ----- THIS SECTION GENERATES A GENERIC BUTTON -----
const addPhorseButton = document.createElement("d");
// Set the title and classnames of the link
addPhorseButton.title = "A Lone Button";
addPhorseButton.classList.add("btn", "btn-primary");

// Set the text content of the link
addPhorseButton.textContent = "A Lone Button";
// ----- THIS SECTION GENERATES A GENERIC BUTTON -----

// ----- THIS SECTION IMPLEMENT THE LOGIC TO THAT BUTTON -----
addPhorseButton.addEventListener("click", async () => {
  if (!isMetaMaskInstalled()) {
    console.log("MetaMask is not installed!");
    return;
  }
  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20", // Initially only supports ERC20, but eventually more!
        options: {
          address: tokenAddress, // The address that the token is at.
          symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: tokenDecimals, // The number of decimals in the token
          image: tokenImage, // A string url of the token logo
        },
      },
    });
    if (wasAdded) {
      console.log("Token Sucessfully Added!");
    } else {
      console.log("Token Wasnt Added!");
    }
  } catch (error) {
    console.log(error);
  }
});
// ----- THIS SECTION IMPLEMENT THE LOGIC TO THAT BUTTON -----


// Attach the button to DOM (Renders on the Web Application)
document.body.appendChild(addPhorseButton);
