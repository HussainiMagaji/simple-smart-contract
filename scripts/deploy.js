async function main( ) {

    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(10);

    await counter.waitForDeployment();
    
    console.log(`Swisstronik contract deployed to ${await counter.getAddress( )}`);
}
    

main( ).catch((error) => {
    console.error(error);
    process.exitCode = 1;
});