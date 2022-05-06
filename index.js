console.log("hello world1");

async function myFunction() {
 const provider = await new ethers.providers.web3Provider.(window.ethereum)
 const blocknumber = await provider.getBlockNumber();
 alert(blocknumber);
}

console.log("hello world2");
window.onload = function(){
  myFunction();
}

