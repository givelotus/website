---
date: 2021-06-21
title: "Mining Lotus"
linkTitle: "Mining Lotus"
author: Shammah Chancellor ([@micropresident](https://twitter.com/micropresident))
---

Download and install Lotus for your operating system from [here](https://givelotus.org/software/)

# Setting up the Lotus Node software to mine.

## Windows

1. Press your "`Windows`" key and "`R`" keys simultaneously, enter %appdata% and press enter.
2. You should be in `.../AppData/Roaming`.
3. Create a folder here called "Lotus" (without quotes). (It will already exist if you ran the Lotus software before)
4. Inside the lotus folder create `lotus.conf` if it doesn't exist
5. Open `lotus.conf` and paste the following:
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
6. Run Lotus-QT.exe, and it should connect up to the network.

## Mac OS

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

## Linux

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

# Setting up the GPU mining software

Currently, we do not distribute binaries of the `lotus-gpu-miner` so mining will require setting up a rust development environment. 

### Mining guide:

### Windows:

1. Install [rustup](https://rustup.rs/)
2. Install [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/). (When running this one, be sure to select the "C++ build tools" for installation, it's about \~6GB worth of download)
3. Install OpenCL SDK,
    1. For AMD, there's a light installation: [OCL_SDK_Lite](https://github.com/GPUOpen-LibrariesAndSDKs/OCL-SDK/releases/download/1.0/OCL_SDK_Light_AMD.exe)
    2. For NVIDIA, install the [CUDA SDK](https://developer.nvidia.com/cuda-downloads) (Download "exe (local)" version)
4. Download the latest mining code from Github and extract to desktop: [https://github.com/LogosFoundation/lotus-gpu-miner/archive/refs/heads/master.zip](https://github.com/LogosFoundation/lotus-gpu-miner/archive/refs/heads/master.zip)
5. Extract it somewhere 
6. Create the configuration file:
    * Press your "`Windows`" key and "`R`" keys simultaneously, a dialog box will appear. Type `%userprofile%` and click `Ok`. Within the `%userprofile%` folder, create a folder called `.lotus-miner` and open it.
7. Within the `%userprofile%\.lotus-miner` folder, create a file called config.toml and paste the following contents:
```
mine_to_address = "lotus_PASTE_YOUR_ADDRESS_HERE"
gpu_index = 1
kernel_size = 18
rpc_url = "http://127.0.0.1:10604"
```
8. Save, but keep this file open, you will need to adjust the `gpu_index` and `mine_to_address` parameters later.
9. Open a command prompt (Start Menu -> search "command prompt" -> click search result)
10. Type: `cd ` (with a space after `cd`) and drag and drop the folder for the extracted `lotus-gpu-miner` source code.
11. Press enter, and then type `rustup default`
12. Type `cargo run`
13. It will print out a list of "Platforms" one of which will be your gpu. Make note of the index, and returning to the `config.toml` file, update the `gpu_index` to match that.
14. In the Lotus-QT software goto the "Receive" tab, and generate a new receive address. Copy and paste that over `lotus_PASTE_YOUR_ADDRESS_HERE`
15. Save, and type `cargo run` again on the command prompt.
16. If you ran into problems, join our [telegram group](https://t.me/givelotus).

### Mac And Linux 

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

# Success

If all is successful, you should see the following output to indicate that you are now mining:

    Running  target\debug\lotus-miner.exe
    Started mining on chain tip:  000000001331242a3179fde731b9d1c8e2c6e535625538262ad8786dedfcb8fc

## Tuning:

1. You can play around with `kernel_size` in `config.toml` in the config to squeeze out a higher hashrate
2. If you have multiple GPUs, you can change `gpu_indices` to address the GPU you want to mine on. Currently, only one GPU per `cargo run` is supported, so you'd need to run multiple command prompts to  mine on multiple GPUs. You can see all available devices and their index when the program starts.