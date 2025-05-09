import image1 from "../../Assets/Jodhpur.jpg";
import video1 from "../../Assets/Videos/jodhpur.mp4";
import image2 from "../../Assets/Goa.jpg";
import video2 from "../../Assets/Videos/goa.mp4";
import image3 from "../../Assets/Jaipur.jpg";
import video3 from "../../Assets/Videos/jaipur.mp4";
import image4 from "../../Assets/Mysore.jpg";
import video4 from "../../Assets/Videos/mysore.mp4";
import image5 from "../../Assets/Chandigarh.jpg";
import video5 from "../../Assets/Videos/chandigarh.mp4";
import image6 from "../../Assets/Mcleodganj.jpg";
import video6 from "../../Assets/Videos/mcleodganj.mp4";
import image7 from "../../Assets/Shrinagar.jpg";
import video7 from "../../Assets/Videos/srinagar.mp4";
import image8 from "../../Assets/Rishikesh.jpg";
import video8 from "../../Assets/Videos/rishikesh.mp4";
import image9 from "../../Assets/Guwahati.jpg";
import video9 from "../../Assets/Videos/guwahati.mp4";
import image10 from "../../Assets/Delhi.jpg";
import video10 from "../../Assets/Videos/delhi.mp4";
import image11 from "../../Assets/Mumbai.jpg";
import video11 from "../../Assets/Videos/mumbai.mp4";

const DestinationDB = [
  {
    id: 1,
    img: image1,
    video: video1,
    name: "Jodhpur",
    location: "Rajasthan",
    rating: 1,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.42465756039!2d73.03054325000001!3d26.2703594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1746748324503!5m2!1sen!2sin"
  },
  {
    id: 2,
    img: image2,
    video: video2,
    name: "Goa",
    location: "India",
    rating: 2,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d492479.18763210607!2d74.0066944!3d15.349728450000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xeaf887ff62f34092!2sGoa!5e0!3m2!1sen!2sin!4v1746748482494!5m2!1sen!2sin"
  },
  {
    id: 3,
    img: image3,
    video: video3,
    name: "Jaipur",
    location: "Rajasthan",
    rating: 3,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.86053520977!2d75.79055784999998!3d26.885210750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1746748564812!5m2!1sen!2sin"
  },
  {
    id: 4,
    img: image4,
    video: video4,
    name: "Mysore",
    location: "Karnataka",
    rating: 4,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124738.44292293876!2d76.6356898!3d12.31064575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1746748610568!5m2!1sen!2sin"
  },
  {
    id: 5,
    img: image5,
    video: video5,
    name: "Chandigarh",
    location: "Punjab",
    rating: 5,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.197454309!2d76.77071360000001!3d30.732280449999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1746748653387!5m2!1sen!2sin"
  },
  {
    id: 6,
    img: image6,
    video: video6,
    name: "McLeod Ganj",
    location: "Himachal Pradesh",
    rating: 6,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13497.94164135819!2d76.3155842!3d32.245019549999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b56d4e3d36d19%3A0xa3e8725f0584be76!2sMcLeod%20Ganj%2C%20Dharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1746748700859!5m2!1sen!2sin"
  },
  {
    id: 7,
    img: image7,
    video: video7,
    name: "Srinagar",
    location: "Jammu & Kashmir",
    rating: 7,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105713.535298228!2d74.80675514999999!3d34.1067185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c5ef%3A0x66244b7cc1e305c6!2sSrinagar!5e0!3m2!1sen!2sin!4v1746748741080!5m2!1sen!2sin"
  },
  {
    id: 8,
    img: image8,
    video: video8,
    name: "Rishikesh",
    location: "Uttarakhand",
    rating: 8,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110471.27046538162!2d78.27060875!3d30.08767875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e67cf93f111%3A0xcc78804a6f941bfe!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1746748808078!5m2!1sen!2sin"
  },
  {
    id: 9,
    img: image9,
    video: video9,
    name: "Guwahati",
    location: "Assam",
    rating: 9,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229225.41139193988!2d91.70288289999999!3d26.1430486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1746748880055!5m2!1sen!2sin"
  },
  {
    id: 10,
    img: image10,
    video: video10,
    name: "Delhi",
    location: "India",
    rating: 10,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1746749063405!5m2!1sen!2sin"
  },
  {
    id: 11,
    img: image11,
    video: video11,
    name: "Mumbai",
    location: "Maharashtra",
    rating: 11,
    mapEmbedURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.5950574475!2d72.8789412!3d19.08255545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1746749101605!5m2!1sen!2sin"
  }
];

export default DestinationDB;
