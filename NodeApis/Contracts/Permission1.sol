pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
contract Permission {
   
    // Patient to Provider Permissions List
    struct ProvidersHavingAccessToPatient {
        string[] providerName;
        string[] accessLevel;
    }
    
    // Provider to Patient Permissions List
    struct PatientsAccessibleByProvider {
        string[] patientCNIC;
        uint[] accessLevel;
    }
   
    mapping (string => ProvidersHavingAccessToPatient) ListOfProvidersHavingAccessToPatients;
    mapping (string => PatientsAccessibleByProvider) ListOfPatientsAccessibleByProviders;
 
    address owner;
   
    constructor() public {
        owner = msg.sender;
    }
    
    string[] tempProviders;
    string[] tempAccesses;
    
    function updatePatientPermissionsList(string memory patientCNIC, string memory providerID, string memory accessLevel) public{
     
        // Fetches list of providers that have been given access to patient's information
        ProvidersHavingAccessToPatient storage providersHavingAccessToPatient = ListOfProvidersHavingAccessToPatients[patientCNIC];
        
        // Storing list of providers having access to a patient's information in tempListOfProviders
        string[] memory tempListOfProvidersForLength = providersHavingAccessToPatient.providerName;
        uint numberOfProviders = tempListOfProvidersForLength.length;
        
        delete tempProviders;
        delete tempAccesses;
        
        int change = 0;
        
        for (uint i = 0; i < numberOfProviders; i++){
            if (keccak256(abi.encodePacked(providersHavingAccessToPatient.providerName[i])) != keccak256(abi.encodePacked(providerID))){
                
                tempProviders.push(providersHavingAccessToPatient.providerName[i]);
                tempAccesses.push(providersHavingAccessToPatient.accessLevel[i]);
                
            } 
            else {
                
                change = 1;
                
            }
        }
        
        if (change == 0 && accessLevel != 0){
            
            tempProviders.push(providerID);
            tempAccesses.push(accessLevel);
            
        }
        
        providersHavingAccessToPatient.providerName = tempProviders;
        providersHavingAccessToPatient.accessLevel = tempAccesses;
        updateProviderPermissionsList(patientCNIC, providerID, accessLevel);
      
    }
}

