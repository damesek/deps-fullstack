## Demo test project

<BR><BR>
Some information to here.
<BR><BR>

<hr style="border:1px solid white">

###Services of Stack 
Based on Clojure tools (deps.edn).
<BR><BR>


| Application services | Libraries |
|:----|-------:|
|  **Database**  	|  _XTDB + RocksDB_ 	|
|  **State Management** 	|  _Mount [clj/ cljs]_	|
|   **Routing/ Interceptors** 	|  _Pedestal_ 	|
|   **Frontend** 	|  _Shadow-cljs + Tailwind CSS_	|
|   **Generate jar** 	|  _Uberdeps_ 	|
|   **Test runner** 	|  _Koacha_ 	|
<BR>

What is contains:

- simple user auth/flow
- simple content at frontend
- simple tests
  
<BR>
UML extensions:

- PlantUML, Mermaid installed for UML diags
- Extension: [puml, plantuml, puclass format] in this folder
  
<BR>
<hr style="border:1px solid white">


### Installation

Rocksdb Installation on Ubuntu 18.04

```shell
sudo apt install liblz4-dev
sudo apt-get install -y libgflags-dev libsnappy-dev zlib1g-dev libbz2-dev libzstd-dev
git clone https://github.com/facebook/rocksdb.git
sudo apt-get install g++
sudo apt-get install build-essential
cd rocksdb/
PORTABLE=1 make all
```

https://docs.desmos.network/fullnode/rocksdb-installation/

- Clone RocksDB `git clone https://github.com/facebook/rocksdb.git && cd rocksdb`
- Build Rocks `DBDEBUG_LEVEL=0 make shared_lib`
- Install RocksDB so that Desmos can access it `sudo make install-shared`
- Make sure the newly built library is linked correctly `sudo ldconfig`
  
```
make install DB_BACKEND=rocksdb
sudo apt install librocksdb-dev
```

### Test diagram setup

Mermaid diagram
```mermaid
graph LR
    A[write code] --> B{Does it work?}
    B -- Yes --> C[Great!]
    B -- No --> D[Google]
    D --> A
```