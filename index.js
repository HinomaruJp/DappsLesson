console.log("hello world");

async function myFunction() {
 const provider = await new ethers.providers.web3Provider.(window.ethereum)
 const blocknumber = await provider.getBlockNumber();
 alert(blocknumber);
}


window.onload = function(){
  myFunction();
}

