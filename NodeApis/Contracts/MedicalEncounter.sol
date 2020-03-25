pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
//import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract MedicalEncounter {
   
   
    struct MedicalEnconterStruct {
        uint[] uid;
        string[] heathcare_professional;
        string[] encounter_time;
        address[] Patient;
        string[] details;
        address[] provider;
        string JSON_Data;
    }
   
    mapping (string => MedicalEnconterStruct) MedicalEncounters;
    string[] public PatientCNIC;
    address owner;
  
   
    constructor() public {
        owner = msg.sender;
    }
 
    function setEncounterData(string memory heathcare_professional,string memory encounter_time,string memory patientCnic,string memory details,address provider,string memory _json) public{
     
       MedicalEnconterStruct storage medicalencounter = MedicalEncounters[patientCnic];
       
        medicalencounter.heathcare_professional.push(heathcare_professional);
        medicalencounter.encounter_time.push( encounter_time);
        medicalencounter.details.push(details);
        medicalencounter.provider.push(provider);
        
        if(keccak256(abi.encodePacked(medicalencounter.JSON_Data)) == keccak256(abi.encodePacked(""))){
          // return ("true")
           medicalencounter.JSON_Data = "[";
              medicalencounter.JSON_Data = string(abi.encodePacked(medicalencounter.JSON_Data,_json));
        }else {
                    //medicalencounter.JSON_Data = medicalencounter.JSON_Data +  _json;
                    //medicalencounter.JSON_Data = medicalencounter.JSON_Data.toSlice().concat(_json.toSlice());
                    medicalencounter.JSON_Data = string(abi.encodePacked(medicalencounter.JSON_Data,",",_json));
        }


    //medicalencounter.JSON_Data = _json;
   
        PatientCNIC.push(patientCnic);
    }
    function getEncounterData(string memory _PatientCNIC ) public view returns(string memory){
            
        return (string(abi.encodePacked(MedicalEncounters[_PatientCNIC].JSON_Data,"]")));
    }
   
    
   
}
