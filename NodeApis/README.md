# APIS Endpoints

## Patient APIS
- Patient Login: http://192.168.32.134:3639/patient/login?username=42101&password=123
  
    * {
    "server_response": {
        "0": "soman",
        "1": "42101",
        "2": "2nd sept 1996",
        "3": "baqai@baqai.com",
        "4": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71",
        "5": "0"
    }
}

- Patient Sign-up: http://192.168.32.134:3639/patient/signup?fname=soman&pat_address=a-301&city=khi&country=pak&weight=40kg&height=5ft&cnic=42101&dob=2nd sept 1996&email=baqai@baqai.com&password=123
 
  * {
    "server_response": "Signup successful!"
}

## Provider APIS

- Provider Login: http://192.168.32.134:3639/provider/login?username=saify@saify.com&password=123
   
    * {
    "server_response": {
        "0": "south",
        "1": "south@south.com",
        "2": "lab",
        "3": "south@south.com",
        "4": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71",
        "5": "0"
    }
}

- Provider Sign-up: http://192.168.32.134:3639/provider/signup?fname=saifee&prov_address=a-301&city=khi&country=pak&prov_type=lab&email=saify@saify.com&password=123
   
    * {
    "server_response": "Provider signup successful!"
}

## Encounter APIS

- Add Encounter: http://192.168.32.134:3639/encounter/add?cnic=42101&dr_name=Dr. Zulfiqar&details=lungs failed&apt_time=1585593376261&provider_id=0
    
    * {
    "server_response": "Successfully added patient record."
}

- get Encounter: http://192.168.32.134:3639/encounter/get?cnic=42101
  
    * {
    "server_response": [
        {
            "dr_name": "Dr. Zulfiqar",
            "apt_time": "1588534281106",
            "details": "lungs failed",
            "uid": "0",
            "provider_id": "0"
        }
    ]
}

## Prescription APIS

- Add Prescription: http://192.168.32.134:3639/prescription/add?&cnic=42101&dr_name=Dr. Zulfiqar&details=lungs failed&medicine={"name": "med_name", "dose": "2 daile"} || {"nam": "med_name", "dose": "3 daile"}&apt_time=1585593376261
   
    * Remeber: medicine={"name": "med_name", "dose": "2 daile"} || {"nam": "med_name", "dose": "3 daile"} (this is to be passed as string in this format from UI. MUST USE DOUBLE PIPE FOR MULTIPLE DATA )
    
    * {
    "server_response": "Prescription added successfully"
}

- get Prescription: http://192.168.32.134:3639/prescription/get?enc_id=0
    
    * {
    "server_response": [
        [
            {
                "name": "med_name",
                "dose": "2 daily"
            },
            {
                "nam": "med_name",
                "dose": "3 daily"
            }
        ]
    ]
}

## Lab Report APIS

- Add Lab Report: http://192.168.32.134:3639/report/add?cnic=42101&apt_time=1585593376261&details=lungs failed&dr_name=Dr. Zulfiqar&report_details={"description": "description_here_1"} || {"description": "description_here_2"}&report_time={"time": "1234"} || {"time": "12345"} &report_title={"title": "title_1"} || {"title": "title_2"}
   
    * Remember: report_title, report_time, report_details is to be passed in the given format as string with each separated by the double pipe sign respectively
 
    * {
    "server_response": "Lab report added successfully"
}

- get Lab Report: http://192.168.32.134:3639/report/get?enc_id=0
    
    * {
    "server_response": {
        "0": [
            [
                {
                    "title": "title_1"
                },
                {
                    "title": "title_2"
                }
            ]
        ],
        "1": [
            [
                {
                    "time": "1234"
                },
                {
                    "time": "12345"
                }
            ]
        ],
        "2": [
            [
                {
                    "description": "description_here_1"
                },
                {
                    "description": "description_here_2"
                }
            ]
        ]
    }
}



## Permission APIS
- Update Patient Permissions List: http://192.168.32.134:3639/patient_permissions_list/update?pat_cnic=42101&prov_id=12&access_level=1
    * {
    "server_response": "successfully updated patient permissions list."
}
- Update Provider Persmissions List: http://192.168.32.134:3639/provider_permissions_list/update?pat_cnic=42101&prov_id=12&access_level=1

- Get Patient Permissions List: http://192.168.32.134:3639/patient_permissions_list/get?pat_cnic=42101
{
    "server_response": {
        "provider_list": [
            {
                "uid": "0",
                "patient_address": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71",
                "fname": "south",
                "password": "123",
                "email": "south@south.com",
                "prov_type": "lab",
                "prov_address": "a-301",
                "city": "khi",
                "country": "pak",
                "signup_time": "1588530495486",
                "access_level": "1"
            },
            {
                "uid": "1",
                "patient_address": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71",
                "fname": "aku",
                "password": "123",
                "email": "aku@aku.com",
                "prov_type": "lab",
                "prov_address": "a-301",
                "city": "khi",
                "country": "pak",
                "signup_time": "1588536939648",
                "access_level": "0"
            }
        ]
    }
}
- Get Provider Persmissions List : http://192.168.32.134:3639/provider_permissions_list/get?provider_id=12
    * {
    "server_response": {
        "patient_list": [
            {
                "uid": "0",
                "acc_address": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71",
                "fname": "soman",
                "password": "123",
                "email": "baqai@baqai.com",
                "pat_address": "a-301",
                "city": "khi",
                "country": "pak",
                "signup_time": "",
                "weight": "40kg",
                "height": "5ft",
                "cnic": "42101",
                "DoB": "2nd sept 1996",
                "access_level": "0"
            }
        ]
    }
}

- NOTE: Patient will call following api: updatePatientPermissionList
- NOTE: proider wali call hi nhi hogi
- NOTE: call updatePatientPermissionRequestsList to remove request from request list after calling Update Patient List with access level given as '0'

## permiission request APIS
- Update patient permission request List: http://192.168.32.134:3639/patient_permission_requests_list/update?pat_cnic=42101&prov_id=0&access_level=1
    * {
    "server_response": "successfully updated patient permission requests list."
        }

- Get patient permission requested list : http://192.168.32.134:3639/patient_permission_requests_list/get?pat_cnic=42101
    * {
    "server_response": {
        "provider_list": [
            {
                "uid": "0",
                "patient_address": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71",
                "fname": "south",
                "password": "123",
                "email": "south@south.com",
                "prov_type": "lab",
                "prov_address": "a-301",
                "city": "khi",
                "country": "pak",
                "signup_time": "1588530495486",
                "access_level": "1"
            }
        ]
    }
}
- Get provider permission requested list : http://192.168.32.134:3639/provider_permission_requests_list/get?provider_id=0
    * {
    "server_response": {
        "patient_list": [
            {
                "uid": "0",
                "acc_address": "0x064FD681DcE8A3EA2e821e3D2C9e85A04fe0ED71",
                "fname": "soman",
                "password": "123",
                "email": "baqai@baqai.com",
                "pat_address": "a-301",
                "city": "khi",
                "country": "pak",
                "signup_time": "",
                "weight": "40kg",
                "height": "5ft",
                "cnic": "42101",
                "DoB": "2nd sept 1996",
                "access_level": "1"
            }
        ]
    }
}

- NOTE: Provider will call this api to request permission -> updatePatientPermissionRequestsList
- NOTE provider wali call nahi hogi
- 

