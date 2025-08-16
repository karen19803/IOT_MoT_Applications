# Bag Monitoring System

## 📌 Overview
This IoT application tracks and monitors a **smart bag** using the **GPS** and **light sensors** via the **Master of Things (MoT)** platform.  
The system provides real-time location tracking, detects if the bag is opened or closed, and ensures security using **Geo-fencing** alerts.  

## 🔧 Features
- **GPS Tracking**: Continuously monitors the bag’s location.  
- **Light Sensor**: Detects if the bag is opened or closed.  
- **Geo-fence Alerts**:  
  - A circular geofence with a **100-meter radius** is created around the user’s home.  
  - If the bag leaves this area, the system automatically sends an **email notification** to the user.  
  - Backend equations are used to calculate the geofence radius accurately.  
- **User Management**: Customer service agent can view and manage registered users.  

## 📑 Application Pages
1. **Template** – Main layout of the app.  
2. **Login Page** – Secure login for bag owners.  
3. **Last Status** – Displays:  
   - Current bag location on a map.  
   - Icon showing whether the bag is open (light detected) or closed.  
4. **Historical Data Page** – Grid showing past locations of the bag.  
5. **Customer Service Agent Page** – Contains user application table with:  
   - Username  
   - Bag ID
   - Phone Numbe+r  
   - Email  
     
## 📊 Results
Screenshots and demo videos can be found in the [media/](media/) folder.
