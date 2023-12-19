---
date: 2021-06-21
category: Guides
title: "Mining Lotus"
linkTitle: "Mining Lotus"
author: Shammah Chancellor ([@micropresident](https://twitter.com/micropresident))
position: 5.0
---
## Setup Lotus Node

### Windows

1. Download the [lotus daemon](https://storage.googleapis.com/lotus-project/lotus-6.3.3-win64-setup-unsigned.exe) and install it somewhere convenient. It'll create shortcuts in your start menu.
2. When you start the wallet, it'll ask you where to place the blockchain data.
   1. **Don't worry about it telling you about hundreds of GBs of data, the Lotus blockchain is just a few MB big, and we haven't updated the texts yet**.
   2. You can pick whatever directory you want here, but it's suggested to leave the default one.
   3. We suggest to uncheck the checkbox for "Discard blocks after verification"; Lotus is still to small for that to be beneficial. It might be useful in a few years though.
3. It will then start the wallet and download the blockchain, this might take a minute or two depending on your internet speed, but shouldn't take much longer than that.
4. Backup your wallet.dat: Click on "File" > "Backup Wallet" and store it on a USB drive or somewhere on a different device. Keep it hidden though, people might be able to steal you Lotus!
5. You're now part of the Lotus network, congrats!

In order to mine, the wallet has to have the RPC server enabled.

1. In the Lotus wallet, click on "Settings" > "Options..." > "Open Configuration File"
2. Select any text editor of your choice, e.g. Notepad
3. The config file might already have some contents if you previously used Lotus on the testnet. In this case, you can create a backup of the file and otherwise replace it with the following.
4. Paste the following into the config file:
```
printtoconsole=1
server=1
rpcuser=lotus
rpcpassword=lotus

[test]
minimumchainwork=0
server=1
rpcuser=lotus
rpcpassword=lotus
```
5. Save the config file
6. Close the Lotus wallet and start it again

### Mac OS

Download [OSX lotus daemon](https://storage.googleapis.com/lotus-project/lotus-6.3.3-osx-unsigned.dmg)


1. Run `mkdir -p '~/Library/Application Support/Lotus/'`
2. Edit `~/Library/Application Support/Lotus/lotus.conf`
3. Paste in the following:
```
printtoconsole=1
server=1
rpcuser=lotus
rpcpassword=lotus

[test]
minimumchainwork=0
server=1
rpcuser=lotus
rpcpassword=lotus
```
4. Start Lotus-QT.app

### Linux
Download [Linux lotus daemon](https://storage.googleapis.com/lotus-project/lotus-6.3.3-x86_64-linux-gnu.tar.gz)

1. Run `mkdir ~/.lotus`
2. Edit `~/.lotus/lotus.conf`
3. Paste in the following:
```
printtoconsole=1
server=1
rpcuser=lotus
rpcpassword=lotus

[test]
minimumchainwork=0
server=1
rpcuser=lotus
rpcpassword=lotus
```
4. Start lotusd if you are running on a server, or lotus-qt if you are running desktop Linux.

## Mining guide

Currently, we do not distribute binaries of the `lotus-gpu-miner` so mining will require setting up a rust development environment.

### Get your wallet address

In order to mine, you need to have an address where to send the mined Lotus to.

1. In the Lotus wallet, click on the "Receive" tab
2. Enter something descriptive in the Label text box, like "My mining address"
3. Leave the other fields as is (you can add a Message if desired)
4. Click "Create new receiving address"
5. It'll open a new window, click on Copy Address at the bottom, which will copy your Lotus address
6. Close the window. You can see there's an entry of your address at the bottom now. You can get the previous window again by double clicking on it

#### Windows

1. Download the windows installer for the [Lotus GPU Miner](https://storage.googleapis.com/lotus-project/Lotus%20GPU%20Miner%200.1.0.msi) and install Lotus GPU Miner somewhere convenient. It'll create shortcuts in your start menu.
2. Open Lotus GPU Miner
3. You *might* need to install OpenCL if this fails:
    1. For AMD, there's a light installation: [OCL_SDK_Lite](https://github.com/GPUOpen-LibrariesAndSDKs/OCL-SDK/releases/download/1.0/OCL_SDK_Light_AMD.exe)
    2. For NVIDIA, install the [CUDA SDK](https://developer.nvidia.com/cuda-downloads) (Download "exe (local)" version)
4. Copy you mining address from the previous step into "Miner address:"
5. Select the GPU you want to use for mining
6. Click "Apply & Mine"
7. It should now start mining! Good luck with your first blocks!
8. If you ran into problems, join our [telegram group](https://t.me/givelotus).

#### Mac And Linux

Mac and linux do not currently have an installer, and will require setting up the development environment.

1. Install [rustup](https://rustup.rs/)
2. Install the Open CL libraries.
    * For Mac, you should already have the OpenCL drivers installed by default.
    * Linux will require installing OpenCL packages for your particular distribution and graphics card
3. Download the latest mining code from Github and extract to desktop: [https://github.com/LogosFoundation/lotus-gpu-miner/archive/refs/heads/master.zip](https://github.com/LogosFoundation/lotus-gpu-miner/archive/refs/heads/master.zip)
4. Extract it somewhere
5. Create the configuration file with this command: `mkdir -p ~/.lotus-miner`
6. Within the `~/.lotus-miner` folder, create a file called config.toml and paste the following contents:
```
mine_to_address = "lotus_PASTE_YOUR_ADDRESS_HERE"
gpu_index = 1
kernel_size = 18
rpc_url = "http://127.0.0.1:10604"
```
7. Keep this file open, you will need to adjust the `gpu_index` and `mine_to_address` parameters later.
8. Navigate to the folder where you extracted the `lotus-gpu-miner` source code.
9. Enter `cargo run` on the terminal prompt within the lotus-gpu-miner directory.
10. It will print out a list of "Platforms" one of which will be your gpu. Make note of the index, and returning to the `config.toml` file, update the `gpu_index` to match that.
11. In the Lotus-QT software goto the "Receive" tab, and generate a new receive address. Copy and paste that over `lotus_PASTE_YOUR_ADDRESS_HERE`
12. Save, and type `cargo run` again on the command prompt.
13. If you ran into problems, join our [telegram group](https://t.me/givelotus).

### Success

If all is successful, you should see the following output to indicate that you are now mining:

    Running  target\debug\lotus-miner.exe
    Started mining on chain tip:  000000001331242a3179fde731b9d1c8e2c6e535625538262ad8786dedfcb8fc

### Tuning

1. You can play around with `kernel_size` in `config.toml` in the config to squeeze out a higher hashrate
2. If you have multiple GPUs, you can change `gpu_indices` to address the GPU you want to mine on. Currently, only one GPU per `cargo run` is supported, so you'd need to run multiple command prompts to  mine on multiple GPUs. You can see all available devices and their index when the program starts.
