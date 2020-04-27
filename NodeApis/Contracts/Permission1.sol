pragma solidity >=0.4.22 <0.6.0;
//pragma experimental ABIEncoderV2;
contract Permission {
   
    struct ProvidersHavingAccessToPatient {
        string providerName;
        int32 accessLevel;
    }
    
    struct PatientsAccessibleByProvider {
        string patientCNIC;
        int32 accessLevel;
    }
   
    mapping (string => ProvidersHavingAccessToPatient[]) ProvidersHavingAccessToPatientsList;
    mapping (string => PatientsAccessibleByProvider[]) PatientsAccessibleByProvidersList;
 
    address owner;
   
    constructor() public {
        owner = msg.sender;
    }
    
    string[] tempNamesList;
}
