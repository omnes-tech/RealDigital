# Curso do Real Digital

This is the Omnes Blockchain repository for the smart contracts of course on Real Digital. About the company can be found [here](https://omnestech.org/).

## Resources

Video para baixar o Ubuntu [here](https://youtu.be/oORD9_OyMpQ). 

Onde baixar o JDK Java [here](https://www.oracle.com/java/technologies/downloads/). 

Abra a pasta e va em other locations e clique em Computer
encontre a pasta "usr" 
depois abra o "lib"
procure jvm
abra a pasta do java-20 
va em bin 
depois aperte o crlt l p
para copiar de onde vem os arquivos e colarmos do CMD
abra o cmd e cole:

```shell
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-20-openjdk-amd64/bin/java 1
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-20-openjdk-amd64/bin/javac 1
sudo gedit /etc/environment
JAVA_HOME="/usr/lib/jvm/jdk-20/bin/"  
source /etc/environment
echo $JAVA_HOME
```
ou se tiver instalado duas versoes atualize a alternativa:

```shell
sudo update-alternatives --config java
```
### Instalar Hyperledger Besu

Instalacao Hyperledger Besu [here](https://besu.hyperledger.org/stable/private-networks/get-started/install/binary-distribution). 

```shell
mkdir hyperledger-besu
wget https://hyperledger.jfrog.io/artifactory/besu-binaries/besu/23.4.4/besu-23.4.4.zip
ls
cp besu-23.4.4.zip hyperledger-besu
ls
unzip besu-23.4.4.zip
cd besu-23.4.4 
ls bin
./bin/besu --version

nano .bashrc
source .bashrc
export PATH="$PATH:<seu diretorio>/hyperledger-besu/besu-23.4.4/bin"
```

### Instalar Nodejs, Visual Studio Code e Hardhat

Para conseguir executar o projeto:
Instalacao Nodejs [here](https://nodejs.org/en/download).

Instalacao Visual Studio Code [here](https://code.visualstudio.com/download).

Instalacao Hardhat [here](https://hardhat.org/).

```shell
git clone https://github.com/omnes-tech/RealDigital
npm install
npx hardhat run scripts/deploy.js
```

```shell
npx hardhat help
npx hardhat test
```
