pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
contract Permission {
   
    struct ProvidersHavingAccessToPatient {
        string providerName;
        uint accessLevel;
    }
    
    struct PatientsAccessibleByProvider {
        string patientCNIC;
        uint accessLevel;
    }
   
    mapping (string => ProvidersHavingAccessToPatient[]) ProvidersHavingAccessToPatientsList;
    mapping (string => PatientsAccessibleByProvider[]) PatientsAccessibleByProvidersList;
 
    address owner;
   
    constructor() public {
        owner = msg.sender;
    }
    
    string[] tempNamesList;

function updatePatientPermissionsList(string memory patientCNIC, string memory providerID, string memory accessLevel) public{
     
        // Fetches list of providers that have been given access to patient's information
        ProvidersHavingAccessToPatient[] storage providersHavingAccessToPatient = ProvidersHavingAccessToPatientsList[patientCNIC];
        
        string[] storage tempListOfProviders;
        // Storing list of providers having access to a patient's information in tempListOfProviders
        for (uint i = 0; i < providersHavingAccessToPatient.length; i++){
            tempListOfProviders.push(providersHavingAccessToPatient[i].providerName);
        }
      
    }
}

