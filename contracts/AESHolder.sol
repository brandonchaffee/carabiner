pragma solidity ^0.4.23;

contract AESHolder {

    // Private here does nothing other than make it slightly harder
    // to access. Security comes from AES and not obscurity.
    mapping (address => bytes16[]) private aesOf;

    function getMyHexAt(uint256 index) public view returns(bytes16){
        return aesOf[msg.sender][index];
    }

    function setMyHex(bytes16[] aesHex) public {
        aesOf[msg.sender] = aesHex;
    }

    function getMyHexLength() public view returns(uint256) {
        return aesOf[msg.sender].length;
    }

}
