import { exec } from "child_process";
import { promisify } from "util";
import readline from "readline";

const execPromisify = promisify(exec);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (query) => new Promise((resolve) => {
    rl.question(query, resolve);
});

const autoDeployRun = async () => {
    const message = await question("Input the text for commit: ");
    const branch = await question("Input the name of branch: ");
    const deployStatus = await question("Would you like to run deployment (Y/N): ");
    
    try {
        await execPromisify("git add .");
        console.log("All files have been added ✅.");

        await execPromisify(`git commit -m "${message}"`);
        console.log(`Changes successfully commited with message ${message} ✅.`);
        
        await execPromisify(`git push origin ${branch}`);
        console.log(`Successfully pushed to branch ${branch} ✅.`);
        
        if(deployStatus && ["Y", "y"].includes(deployStatus.trim())) {
            await execPromisify("npm run deploy");
        }
    } catch(error) {
        console.log(`\n${error}`);
    }
};

(async () => {
    await autoDeployRun();
    process.exit();
})();