pragma solidity ^0.4.23;

contract Carabiner {

    // Private here does nothing other than make it slightly harder
    // to access. Security comes from AES and not obscurity.
    mapping (address => HexSetHolder[]) private hexSetOf;

    // Seperated into different bytes sets to decrease gas costs when
    // changing username, url or password
    struct HexSetHolder {
        bytes16[] username;
        bytes16[] url;
        bytes16[] password;
    }

    // Initialzies new hex set for sender
    function addHexSet(
        bytes16[] _username,
        bytes16[] _url,
        bytes16[] _password
    ) public returns(uint256){
        uint256 setID = hexSetOf[msg.sender].length++;
        HexSetHolder storage h = hexSetOf[msg.sender][setID];
        h.username = _username;
        h.url = _url;
        h.password = _password;
        return setID;
    }


    function changeHexSetUsername(uint256 _id, bytes16[] _username) public {
        hexSetOf[msg.sender][_id].username = _username;
    }

    function changeHexSetURL(uint256 _id, bytes16[] _url) public {
        hexSetOf[msg.sender][_id].url = _url;
    }

    function changeHexSetPassword(uint256 _id, bytes16[] _password) public {
        hexSetOf[msg.sender][_id].password = _password;
    }

    function getHexSetAt(uint256 _id) public view returns(
        bytes16[] _username, bytes16[] _url, bytes16[] _password
    ) {
        HexSetHolder storage h = hexSetOf[msg.sender][_id];
        return (h.username, h.url, h.password);
    }

    function getHexSetCount() public view returns(uint256) {
        return hexSetOf[msg.sender].length;
    }
}
