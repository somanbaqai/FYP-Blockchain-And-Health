pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
//import "github.com/Arachnid/solidity-stringutils/strings.sol";

contract LabReport {
   
   
    struct LabReportStruct {
        uint uid;
        string encounter_id;

        address provider;
        // string medicine;
        string report_time_JSON_Data;
        string report_title_JSON_Data;
        string description_JSON_Data;
    }
   
    mapping (string => LabReportStruct) private LabReportData;
    // string[] public PatientCNIC;
    address private owner;
  
   uint private index = 0;
    constructor() public {
        owner = msg.sender;
    }
    
 
    
    function setLabReportrData(string memory _report_time,string memory enc_id,address provider,string memory _title,string memory _json) public{
     
       LabReportStruct storage labreport = LabReportData[enc_id];
       
        // LabReport.heathcare_professional.push(heathcare_professional);
        // labreport.report_time =  _report_time;
        labreport.provider = provider;
        labreport.uid = index;
        labreport.encounter_id = enc_id;

  
        if(keccak256(abi.encodePacked(labreport.description_JSON_Data)) == keccak256(abi.encodePacked(""))){
          // return ("true")
            labreport.report_title_JSON_Data = "[";
            labreport.report_title_JSON_Data = string(abi.encodePacked(labreport.report_title_JSON_Data,_title));
        }else {
                    labreport.description_JSON_Data = string(abi.encodePacked(labreport.report_title_JSON_Data,",",_title));
        }
        
        if(keccak256(abi.encodePacked(labreport.description_JSON_Data)) == keccak256(abi.encodePacked(""))){
          // return ("true")
            labreport.description_JSON_Data = "[";
            labreport.description_JSON_Data = string(abi.encodePacked(labreport.description_JSON_Data,_json));
        }else {
                    labreport.description_JSON_Data = string(abi.encodePacked(labreport.description_JSON_Data,",",_json));
        }
        
        if(keccak256(abi.encodePacked(labreport.report_time_JSON_Data)) == keccak256(abi.encodePacked(""))){
          // return ("true")
            labreport.report_time_JSON_Data = "[";
            labreport.report_time_JSON_Data = string(abi.encodePacked(labreport.report_time_JSON_Data,_report_time));
        }else {
                    labreport.description_JSON_Data = string(abi.encodePacked(labreport.report_time_JSON_Data,",",_report_time));
        }

        index = index + 1;

    }
    function getLabReportData(string memory enc_id ) public view returns(string memory, string memory, string memory){
            
        return (string(abi.encodePacked(LabReportData[enc_id].report_title_JSON_Data,"]")),string(abi.encodePacked(LabReportData[enc_id].report_time_JSON_Data,"]")),string(abi.encodePacked(LabReportData[enc_id].description_JSON_Data,"]")));
    }
    
    
    
    
   
}