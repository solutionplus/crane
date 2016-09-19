(function () {
    'use strict';
    angular.module('app.utils')
        .config(i18nEn);

    /* @ngInject */
    function i18nEn($translateProvider) {
        $translateProvider.translations('en-US', {
            //general
            "Created At": 'Created At',
            "Updated At": 'Updated At',
            "Operation": 'Operation',
            "Update": 'Update',
            "Stats": 'Stats',
            "Log": 'Log',
            "Detail": 'Detail',
            "Container": 'Container',
            "Status": "Status",
            "Driver": "Driver",
            "Volume Name is required": "can not be empty",
            "Only number and letter permitted": "name only can be number and letter",
            "Next": "Next",
            "Previous": "Previous",
            "Cancel": "Cancel",
            "Done": "Done",
            "YES": "YES",
            "NO": "NO",
            "ID": "ID",
            "Labels": "Labels",
            "Created": "Created",
            "Local": "Local",
            "Version": "Version",
            "Name": "Name",
            "Service": "Service",
            "Task": "Task",
            "Basic Information": 'Basic Information',
            "Not configured": 'Not configured',
            "No information": 'No information',
            "Core": 'Core',
            "Memory": 'Memory',
            "Second": 'second',
            "Environment": 'Environment Variables',
            "Confirm": 'Confirm',
            "Connect": 'Connect',
            "Add Node label": 'Add Node label',
            "System": "System",
            "Configuration": "Configuration",
            "unknown": "unknown",
            "More Actions": "More Actions",
            "Delete": "Delete",
            "on-failure": "on-failure",
            "Restart condition: Any": "Restart condition: Any",
            "Only numbers, letters or underscore permitted": "Only numbers, letters or underscore permitted",
            "Duplicated KEY is not permitted": "Duplicated KEY is not permitted",
            "Chinese KEY is not permitted": "Chinese KEY is not permitted",
            "Chinese VALUE is not permitted": "Chinese VALUE is not permitted",
            "Permission": "Permission",
            "Must be letter or digit": "Must be letter or digit",
            "Name field is required": "Name field is required",
            "Read-only": "Read-only",
            "Read-Write": "Read-Write",
            "Empty": "Empty",
            "Options": "Options",
            "Deploy": "Deploy",
            "Read from a file": "Read from a file",
            "No details": "No details",
            "Username": "Username",
            "Password": "Password",
            "Password is required": "Password is required",
            "Passwords mis-match": "Passwords mis-match",
            "Confirm password again": "Confirm password again",
            "Username is required": "Username is required",


            //index module
            "LOGOUT": 'Logout',
            "Stack": 'Stack',
            "Image": 'Image',
            "Architecture": 'Architecture',
            "Node": 'Node',
            "Network": 'Network',
            "Registry Auth": 'Registry Auth',
            "Information": 'Information',
            "Activation": 'Activation',
            "Have a try ...": 'Have a try ...',
            "Empty records ...": 'No query to the relevant information ...',
            "License will be expired": 'Your serial number is about to expire , please fill in the information to obtain a new serial number.',

            //stack module
            "Stacks": 'Stacks',
            "Create Stack": 'Create Stack',
            "Service Update": 'Service Update',
            "Stack Detail": 'Stack Detail',
            "Service Detail": 'Service Detail',
            "Create in the following ways": 'Create in the following ways',
            "In DAB": 'DAB',
            "In Form Wizard": 'Guide',
            "In Stack template": 'Stack Template',
            "Delete Stack": 'Delete Stack',
            "Save as stack template": 'Save as stack template',
            "Services": 'Services',
            "Service Name": 'Service Name',
            "Task Number": 'Task Number',
            "Running/Total": 'Running/Total',
            "Service Scale": 'Service Scale',
            "Modal title for delete stack": 'The project will not be able to recover after deletion, confirm to be deleted?',
            "Tasks": 'Tasks',
            "Discovery": 'Discovery',
            "CD": 'CD',
            "TaskId": 'Task Id',
            "Task State": 'Task State',
            "Abnormal": 'Abnormal',
            "Task_state_new": 'new',
            "Task_state_allocated": 'allocated',
            "Task_state_pending": 'pending',
            "Task_state_assigned": 'assigned',
            "Task_state_accepted": 'accepted',
            "Task_state_preparing": 'preparing',
            "Task_state_ready": 'ready',
            "Task_state_starting": 'starting',
            "Task_state_running": 'running',
            "Task_state_complete": 'complete',
            "Task_state_shutdown": 'shutdown',
            "Task_state_failed": 'failed',
            "Task_state_rejected": 'rejected',
            "Image Permissions": 'Image Permissions',
            "StopGracePeriod": 'StopGracePeriod',
            "StopGracePeriod Tooltip": 'The container will be forced to kill after the tolerance time',
            "Container Dir": 'Container Dir',
            "Resources Limits": 'Resource limits for each task',
            "Reservations": 'Reserved resources for each task',
            "Fault Tolerant": 'Fault Tolerant',
            "RestartPolicy": 'Restart Policy',
            "Task_restart_policy_none": 'none',
            "Task_restart_policy_any": 'any',
            "Task_restart_policy_on_failure": 'on-failure',
            "Delay": 'Restart interval',
            "Window": 'Evaluation interval',
            "MaxAttempts": 'Max Attempts',
            "Rolling Update": 'Rolling Update',
            "FailureAction": 'Update failed policy',
            "Update Policy": 'Update Policy',
            "continue": 'continue',
            "Stop": 'Stop',
            "Interval": 'Interval',
            "Update Parallelism": 'Update Parallelism',
            "Service Labels": 'Service Labels',
            "Add Service Labels": 'Add Service Labels',
            "Add Container Labels": 'Add Container Labels',
            "Add Port Mapping": 'Add Port Mapping',
            "Added Environment Variables": 'Added Environment Variables',
            "Add constraints": 'Add constraints',
            "Mount": 'Mount',
            "Memory at least 4MB": "memory at least 4MB",
            "Set a name for your stack": "Set a name for your stack",
            "Fill in the service information": "Fill in the service information",
            "Stack Template Name": "Stack Template Name",
            "New Service": "New Service",
            "Service Mode": "Service Mode",
            "Select Network": "Select Network",
            "Read Only": "Read Only",
            "Registry Auth Name": "Registry Auth Name",
            "Work directory": "Work directory",
            "Command": "Command",
            "Replicated": "Replicated",
            "Global": "Global",
            "CMD": "CMD",
            "Resource limit": "Resource limit",
            "Resource limits for each task": "Resource limits for each task",
            "Reserved resources for each task": "Reserved resources for each task",
            "Restart Policy": "Restart Policy",
            "none": "Don't restart",
            "Update Failure Action": "Update Failure Action",
            "Pause Update": "Pause",
            "Scheduling Policy": "Scheduling Policy",
            "File mount": "File mount",
            "Host port": "Host port",
            "Port can not exceed 65535": "Port can not exceed 65535",
            "Host path": "Host path",
            "Constraints": "Constraints",
            "Duplicated service name is not permitted": "Duplicated service name is not permitted",
            "Image is required": "Image is required",
            "Chinese Command is not permitted": "Chinese Command is not permitted",
            "Chinese Args is not permitted": "Chinese Args is not permitted",
            "CPU at least 0.01": "CPU at least 0.01",
            "Maximum service port can not exceed 65535": "Maximum service port can not exceed 65535",
            "Service port at least 1": "Service port at least 1",
            "Deployment and export": "Deployment and export",
            "Continue to add": "Continue to add",
            "Delete Service": "Delete Service",


            // node module
            "Digest": "Digest",
            "Hostname": "Hostname",
            "Network Mode": "Network Mode",
            "Network Name": "Network Name",
            "HostnamePath": "Hostname Path",
            "HostsPath": "Hosts Path",
            "LogPath": "Log Path",
            "ResolvConfPath": "ResolvConf Path",
            "Port Mapping": "Port Mapping",
            "Published Port": "Published Port",
            "Port": "Port",
            "Protocol": "Protocol",
            "Network Configuration": "Network Config",
            "Gateway": "Gateway",
            "Illegal Gateway": "gateway illegal",
            "IP Address": "IP Address",
            "MAC Address": "MAC Address",
            "Gateway IP": "Gateway IP",
            "Container labels": "Container Labels",
            "Volume": "Volume",
            "Path": "Path",
            "Image Name": "Image",
            "Change": "Changed",
            "Terminal": "Terminal",
            "Change mode": "Change Mode",
            "File Path": "File Path",
            "No information about the changes": "no information about the changes",
            "No log information": "no log information",
            "Illegal IP address format": "Illegal IP address format",
            "Host IP": "Host IP",
            "IP range": "IP Range",
            "IP range illegal": "IP range illegal",
            "Install Docker": "1. Install Docker",
            "Docker intalled": "if Docker was installed, please skip。",
            "Copy code": "Click To Copy",
            "Add host command": "2. Command of add host",
            "Exec add host cmd": "Please sign the target host，run the following command，This operation requires sudo privileges.",
            "Create Host-Only network": "Create Host Network",
            "Subnet Mask": "Subnet Mask",
            "Subnet Mask illegal": "subnet mask illegal",
            "Internal Network": "Internal Network",
            "Multiple labels supported": "Multiple labels supported",
            "Add labels": "Add Labels",
            "Duplicated KEY is not permitted": "Duplicated KEY is not permitted",
            "Add volume": "Add Volume",
            "Volume name": "Volume Name",
            "Docker info": "Docker Info",
            "Volume driver": "Volume Driver",
            "Volume dir": "Volume Dir",
            "Debug model": "Debug Mode",
            "Cgroup driver": "Cgroup Driver",
            "Disable OOM Kill": "Disable OOM Kill",
            "Host information": "Host Information",
            "Kernel version": "Kernel Version",
            "System time": "System Time",
            "Internal address": "Internal Address",
            "Status/Running duration": "Status/operation hours",
            "Remove": "Remove",
            "Kill": "Kill",
            "Running containers": "Running Containers",
            "Total containers": "Total Containers",
            "Paused containers": "Paused Containers",
            "Stopped containers": "Stopped Containers",
            "Images": "Images",
            "Node labels": "Host Labels",
            "Create Volume": "Created Volume",
            "Size": "Size",
            "Remove image": "Remove Image",
            "Container Sum": "Container Number",
            "Remove network": "Remove Network",
            "Mount points": "Mount Points",
            "Remove volume": "Remove Volume",
            "Vol_driver_local": "local",
            "Node List": "Node List",
            "Add Node": "Add Node",
            "Node Detail": "Node Detail",
            "Image Detail": "Image Detail",
            "Container Detail": "Container Detail",
            "Volume Detail": "Volume Detail",
            "Role": "Role",
            "Availability": "Availability",
            "Connect host": "Connect host",
            "Docker Daemon Setup": "Docker Daemon Setup",
            "Edit label": "Edit label",
            "Edit label tooltip": "Edit the host label",
            "Drain": "Drain",
            "Drain tooltip": "After stopping a scheduled task on that host will be assigned to other hosts , new tasks can not be allocated to the host",
            "Active": "Active",
            "Active tooltip": "Recovery tasks on this host free scheduling",
            "Pause": "Pause",
            "Pause tooltip": "After a pause dispatching a new task will no longer be assigned to the host, but the task has been released to the host will not be affected",
            "Delete host": "Delete host",
            "Delete host tooltip": "To remove a host , noted that only the state is Down host can be deleted",
            "Node_role_worker": "worker",
            "Node_role_manager": "manager",
            "Node_availability_drain": "Drain",
            "Node_availability_active": "Normal",
            "Node_availability_pause": "Pause",
            "Node_state_unknown": "unknown",
            "Node_state_down": "down",
            "Node_state_ready": "ready",
            "Node_state_disconnected": "disconnected",
            "The number of tasks": "Number of tasks",
            "Docker TCP Socket Addrs Required": "Docker TCP Socket address required",
            "Docker Daemon TCP Socket required": "Docker Daemon TCP Socket required",
            "Enable Docker TCP Socket": "To get more details, you need to enable Docker Daemon TCP Socket service on that host.",
            "Docker TCP Socket Addrs": "Docker TCP Socket Address",
            "Address Required": "Address Required",
            "How to configure Docker Daemon Socket Addrs": "How to configure the TCP Socket Docker Daemon address ?",
            "Edit the docker.service file": "Edit the file/usr/lib/systemd/system/docker.service, Set up",
            "Edit the docker file": "Edit the /etc/default/docker , Set up",
            "Save and Run Command": "Save and Run Command",
            "Are you sure offline the host ?": "Are you sure that host offline ？",
            "Are you sure to activate the host ?": "Are you sure to activate the host ?",
            "Are you sure to delete this host ?": "Are you sure to delete this host ？",
            "Are you sure to pause the node?": "Are you sure the host is suspended ？",
            "Are you sure to delete the storage volume ?": "Are you sure to delete the storage volume ?",
            "Are you sure to delete the image ?": "Are you sure to delete the image ？",
            "Are you sure to remove the container ?": "Are you sure to remove the container ？",
            "Are you sure to kill the container ?": "Are you sure to kill the container ?",
            "Image size": "Image size",
            "Layer": "Layer",
            "Docker Version": "Docker Version",
            "Container hostname": "Container hostname",
            "None": "None",
            "Container_status_labels_running": "running",
            "Container_status_labels_paused": "paused",
            "Container_status_labels_dead": "dead",
            "Container_status_labels_restarting": "restarting",
            "Container_status_labels_created": "created",
            "Container_status_labels_exited": "exited",
            "Docker Volume": "Docker Volume",
            "Diff_kind_0": "modify",
            "Diff_kind_1": "add",
            "Diff_kind_2": "delete",


            //registry-auth module
            "Registry Auth list": "Registry Auth List",
            "Add registry auth": "Add Registry Auth",
            "Are you sure to delete this auth pair?": "Are you sure to delete this auth pair?",

            //registry module
            "Schema Version": "Schema Version",
            "Images": "Images",
            "Stack Deploy": "Stack Deploy",
            "Create Stack Template": "Create Stack Template",
            "Update Stack Template": "Update Stack Template",
            "How to create a docker image": "How to create a docker image",
            "Stack Templates": "Stack Templates",
            "Public Docker Images": "Public Docker Images",
            "My Docker Images": "My Docker Images",
            "New Stack Template": "New Stack Template",
            "Stack Template Description": "Stack Template Description",
            "Are you sure to remove the image ?": "Are you sure to remove the mirror ？",
            "Are you sure to delete the stack template ?": "Are you sure to delete the stack template ?",

            //network module
            "Network List": "Network List",
            "Type": "Type",
            "Create Network": "Create Network",
            "Network Detail": "Network Detail",
            "Scope": "Scope",
            "Support IPv6": "Support IPv6",
            "Host-Only network": "Host-Only network",
            "Address Management": "Address Management",
            "Connect containers": "Connect containers",
            "Container Name": "Container Name",
            "IPv4 address": "IPv4 address",
            "IPv6 address": "IPv6 address",
            "No query information to a network": "No query information to a network",
            "Are you sure to delete the network ?": "Are you sure to delete the network ?",

            //misc module
            "Cluster Name": "Cluster Name",
            "Manager Token": "Manager Token",
            "Worker Token": "Worker Token",
            "Cluster Information": "Cluster Information",

            //Notification
            "Host updated successfully": "Host updated successfully",
            "Successfully deleted": "Successfully deleted",
            "Killed successfully": "Killed successfully",
            "Offline successfully": "Offline successfully",
            "Activated successfully": "Activated successfully",
            "Host successfully deleted": "Host successfully deleted",
            "Paused successfully": "Paused successfully",
            "Created successfully": "Created successfully",
            "Updated Successfully": "Updated Successfully",
            "Scaled successfully": "Scaled successfully",
            "Deploying, image pull will cost some time": "Deploying, image pull will cost some time",

            //error code
            "CODE_MESSAGE_10000": "Service busy, please try again later",
            "CODE_MESSAGE_10001": "Service busy, please try again later",
            "CODE_MESSAGE_10002": "Parameter error",
            "CODE_MESSAGE_11001": "Get container list parameter error",
            "CODE_MESSAGE_11002": "Update container parameter error",
            "CODE_MESSAGE_11003": "Error update container operation",
            "CODE_MESSAGE_11004": "Remove container parameter error",
            "CODE_MESSAGE_11005": "Error remove container operation",
            "CODE_MESSAGE_11006": "Specifies container was not found",
            "CODE_MESSAGE_11007": "Specifies container was already running",
            "CODE_MESSAGE_11008": "Specifies container was need running",
            "CODE_MESSAGE_11009": "Invalid image name",
            "CODE_MESSAGE_11101": "Get image list parameter error",
            "CODE_MESSAGE_11201": "Connect to specifiles network parameter error",
            "CODE_MESSAGE_11202": "Unsupported network connections Operation",
            "CODE_MESSAGE_11203": "Create network parameter error",
            "CODE_MESSAGE_11204": "Inspect specifies network parameter error",
            "CODE_MESSAGE_11205": "Get network list parameter error",
            "CODE_MESSAGE_11206": "Network operating system can not be built",
            "CODE_MESSAGE_11207": "Specifies network was not found",
            "CODE_MESSAGE_11208": "Specifies container/network was not found",
            "CODE_MESSAGE_11209": "Create network failed, invalid network name",
            "CODE_MESSAGE_11301": "Update node parameter error",
            "CODE_MESSAGE_11302": "Unsupported node connections Operation",
            "CODE_MESSAGE_11303": "Invalid node role",
            "CODE_MESSAGE_11304": "Invalid node availability",
            "CODE_MESSAGE_11305": "Get node info failed",
            "CODE_MESSAGE_11401": "Update service parameter error",
            "CODE_MESSAGE_11402": "Create service parameter error",
            "CODE_MESSAGE_11403": "Scale service parameter error",
            "CODE_MESSAGE_11404": "Invalid CPU parameter of service",
            "CODE_MESSAGE_11405": "Invalid delay parameter of service",
            "CODE_MESSAGE_11406": "Invalid window parameter of service",
            "CODE_MESSAGE_11407": "Invalid terminal parameter of service",
            "CODE_MESSAGE_11408": "Invalid depoly parameter of service",
            "CODE_MESSAGE_11409": "Invalid memory parameter of service",
            "CODE_MESSAGE_11410": "Invalid update parameter of service",
            "CODE_MESSAGE_11411": "Parameter of service can not empty",
            "CODE_MESSAGE_11412": "Invalid service name",
            "CODE_MESSAGE_11413": "Service port conflict",
            "CODE_MESSAGE_11501": "Create stack parameter error",
            "CODE_MESSAGE_11502": "Create stack failed, invalid stack name",
            "CODE_MESSAGE_11601": "Create volume parameter error",
            "CODE_MESSAGE_11602": "Create volume failed, invalid volume name",
            "CODE_MESSAGE_11701": "Connected to the specified node fails",
            "CODE_MESSAGE_11702": "Connected to the specified node fails, empty endpoint",
            "CODE_MESSAGE_11703": "Endpoint and node ID does not match the specified node",
            "CODE_MESSAGE_11704": "Connected to the specified node fails, error endpoint",
            "CODE_MESSAGE_11901": "Get config failed",
            "CODE_MESSAGE_12001": "Invalid user group",
            "CODE_MESSAGE_12002": "Create user parameter error",
            "CODE_MESSAGE_12003": "Failed to add user permissions",
            "CODE_MESSAGE_12004": "Gets the specified user failed",
            "CODE_MESSAGE_12005": "Specifies the user was not found",
            "CODE_MESSAGE_12006": "Login parameter error",
            "CODE_MESSAGE_12007": "Login failed",
            "CODE_MESSAGE_12008": "Sign failure",
            "CODE_MESSAGE_12009": "Error user group",
            "CODE_MESSAGE_12010": "User not found within a specified group of users",
            "CODE_MESSAGE_12011": "Invalid user id",
            "CODE_MESSAGE_12012": "Specifies the user group is not found",
            "CODE_MESSAGE_12013": "Invalid user group id",
            "CODE_MESSAGE_12014": "Specifies the user group was not found",
            "CODE_MESSAGE_12015": "Failed to get user group list",
            "CODE_MESSAGE_12016": "Users do not have permission to modify",
            "CODE_MESSAGE_12017": "Creating user groups Parameter error",
            "CODE_MESSAGE_12018": "Failed to create user group",
            "CODE_MESSAGE_12019": "Update user group parameter error",
            "CODE_MESSAGE_12020": "Failed to update user group",
            "CODE_MESSAGE_12021": "Failed to remove user group, invalid user group id",
            "CODE_MESSAGE_12022": "Failed to remove user group",
            "CODE_MESSAGE_12023": "Failed to join user group, invalid user group id",
            "CODE_MESSAGE_12024": "Failed to join user group, invalid user id",
            "CODE_MESSAGE_12025": "Failed to join user group",
            "CODE_MESSAGE_12026": "Failed to leave user group, invalid user group id",
            "CODE_MESSAGE_12027": "Failed to leave user group, invalid user id",
            "CODE_MESSAGE_12028": "Failed to leave user group",
            "CODE_MESSAGE_12029": "Add service access failure",
            "CODE_MESSAGE_12030": "Add service access failure",
            "CODE_MESSAGE_12031": "Remove service access failure, invalid query key",
            "CODE_MESSAGE_12032": "Remove service access failure",
            "CODE_MESSAGE_13001": "Error search key word",
            "CODE_MESSAGE_14001": "Get registry config error",
            "CODE_MESSAGE_14002": "Get registry config failed, error parameter",
            "CODE_MESSAGE_14003": "Remove registry config failed",
            "CODE_MESSAGE_14004": "Failed to publish registry, parameter error",
            "CODE_MESSAGE_14005": "Failed to publish registry, update parameter error",
            "CODE_MESSAGE_14006": "Get registry stack template error",
            "CODE_MESSAGE_14007": "Get registry image tag list error",
            "CODE_MESSAGE_14008": "Get registry token get basicauth error",
            "CODE_MESSAGE_14009": "Get registry invalid auth",
            "CODE_MESSAGE_14010": "Get registry make token error",
            "CODE_MESSAGE_15031": "Get stack template list error",
            "CODE_MESSAGE_15032": "Get stack template error",
            "CODE_MESSAGE_15033": "Invalid user",
            "CODE_MESSAGE_15034": "Invalid stacj template",
            "CODE_MESSAGE_15035": "Invalid request parameter",
            "CODE_MESSAGE_15036": "Invalid image, please try another one",
            "CODE_MESSAGE_15037": "Remove stack template failed",
            "CODE_MESSAGE_15038": "Ban stack template failed",
            "CODE_MESSAGE_15039": "Update stack template failed",
            "CODE_MESSAGE_15040": "Create stack template failed",
            "CODE_MESSAGE_16001": "Get license failed",
            "CODE_MESSAGE_16002": "Acticate license failed",
            "CODE_MESSAGE_16003": "No license, please activate",
            "CODE_MESSAGE_17001": "Create registryauth parameter error",
            "CODE_MESSAGE_17002": "Registryauth is already exist",
            "CODE_MESSAGE_17003": "Remove registryauth parameter error",
            "CODE_MESSAGE_17004": "Invalid user",
        });
    }
})();
