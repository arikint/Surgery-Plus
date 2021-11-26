import React from "react";
import './ServiceDetails.css';
import Rating from 'react-rating';
import { useParams } from "react-router-dom";
/* --------------------------------------------
 -----Function for servicedetail------------
 ---------------------------------------------*/

const ServiceDetails = () => {

   /* --------------------------------------------
 -----Stringified json data for efficiency------------
 ---------------------------------------------*/

    let { key } = useParams();
    const service="[\n    {\n        \"key\": \"B002RL8IYK\",\n        \"name\": \"Appendectomy\",\n        \"surgeon\": \"Gazi Yasargil\",\n        \"description\": \"An appendectomy is the surgical removal of the appendix, a small tube that branches off the large intestine, to treat acute appendicitis. Appendicitis is the acute inflammation of this tube due to infection.\",\n        \"no_of_patients\": \"15\",\n        \"duration\": 32,\n        \"rating\": 5,\n        \"img\": \"https://i.ibb.co/LvFRCzZ/appendicitis.jpg\",\n        \"price\": 145\n    },\n    {\n        \"key\": \"B01LZ2WZGH\",\n        \"name\": \"Carotid endarterectomy\",\n        \"surgeon\": \"Dr. William Abdu\",\n        \"description\": \"Carotid endarterectomy is a surgical procedure to remove blockage from carotid arteries, the arteries located in the neck that supply blood to the brain. Left untreated, a blocked carotid artery can lead to a stroke.\",\n        \"no_of_patients\": \"34\",\n        \"duration\": 25,\n        \"rating\": 5,\n        \"img\": \"https://i.ibb.co/995dsPF/Carotid-endarterectomy.jpg\",\n        \"price\": 112\n    },\n    {\n        \"key\": \"B01K1IO3QW\",\n        \"name\": \"Cataract surgery\",\n        \"surgeon\": \"Dr. Myles Abbott\",\n        \"description\": \"Cataracts cloud the normally clear lens of the eyes. Cataract surgery involves the removal of the cloudy lens, which is replaced with a clear artificial lens implant.\",\n        \"no_of_patients\": \"42\",\n        \"duration\": 45,\n        \"rating\": 5,\n        \"img\": \"https://i.ibb.co/2jNpQdV/cataract.jpg\",\n        \"price\": 221\n    },\n    {\n        \"key\": \"B01LD4MGY4\",\n        \"name\": \"Cholecystectomy\",\n        \"surgeon\": \"Dr. Fouad Abbas\",\n        \"description\": \"A cholecystectomy is surgery to remove the gallbladder (a pear-shaped sac near the right lobe of the liver that holds bile). A gallbladder may need to be removed if the organ is prone to troublesome gallstones, if it is infected, or becomes cancerous.\",\n        \"no_of_patients\": \"25\",\n        \"duration\": 35,\n        \"rating\": 5,\n        \"img\": \"https://i.ibb.co/PNBLdX3/Cholecystectomy.jpg\",\n        \"price\": 115\n    },\n    {\n        \"key\": \"B01M18UZF5\",\n        \"name\": \"Coronary artery bypass\",\n        \"surgeon\": \"Dr. Khalid Abbed\",\n        \"description\": \"Most commonly referred to as simply bypass surgery this surgery is often done in people who have angina (chest pain) and coronary artery disease (where plaque has built up in the arteries). During the surgery, a bypass is created by grafting a piece of a vein above and below the blocked area of a coronary artery, enabling blood to flow around the obstruction.\",\n        \"no_of_patients\": \"14\",\n        \"duration\": 46,\n        \"rating\": 4,\n        \"img\": \"https://i.ibb.co/TbfW8CJ/Coronary-artery-bypass.png\",\n        \"price\": 245\n    },\n    {\n        \"key\": \"B01DBGVB7K\",\n        \"name\": \"Debridement of wound\",\n        \"surgeon\": \"Dr. Naresh Trehan\",\n        \"description\": \"Debridement involves the surgical removal of foreign material and/or dead, damaged, or infected tissue from a wound or burn. By removing the diseased or dead tissue, healthy tissue is exposed to allow for more effective healing.\",\n        \"no_of_patients\": \"21\",\n        \"duration\": 75,\n        \"rating\": 3,\n        \"img\": \"https://i.ibb.co/rmmZ533/Debridement.jpg\",\n        \"price\": 312\n    },\n    {\n        \"key\": \"B015WXL0C6\",\n        \"name\": \"Partial colectomy\",\n        \"surgeon\": \"Benjamin Carson\",\n        \"description\": \"A partial colectomy is the removal of part of the large intestine (colon) which may be done to treat cancer of the colon  or inflammatory conditions such as ulcerative colitis or diverticulitis.\",\n        \"no_of_patients\": \"19\",\n        \"duration\": 34,\n        \"rating\": 5,\n        \"img\": \"https://i.ibb.co/jhHKfS7/colectomy.jpg\",\n        \"price\": 186\n    },\n    {\n        \"key\": \"B06Y4GZS9C\",\n        \"name\": \"skin graft\",\n        \"surgeon\": \"Dr. Corrie Anderson\",\n        \"description\": \"A skin graft involves detaching healthy skin from one part of the body to repair areas of lost or damaged skin in another part of the body. Skin grafts are often done as a result of burns, injury, or surgical removal of diseased skin. They are most often done when the area is too large to be repaired by stitching or natural healing.\",\n        \"no_of_patients\": \"27\",\n        \"duration\": 64,\n        \"rating\": 2,\n        \"img\": \"https://i.ibb.co/3Sv7nhq/skin-graft.jpg\",\n        \"price\": 423\n    },\n    {\n        \"key\": \"B06XJJG4PD\",\n        \"name\": \"back pain surgery\",\n        \"surgeon\": \"Dr. Mark Aaron\",\n        \"description\": \"Low back pain can have various causes, including abnormal development of the backbone, stress on the back, injury, or a physical disorder that affects the bones of the spine. Usually, surgery is not considered until other options have been exhausted, including rest, medication, and mild exercise. The type of surgery done on the back depends on the diagnosis.\",\n        \"no_of_patients\": \"36\",\n        \"duration\": 33,\n        \"rating\": 4,\n        \"img\": \"https://i.ibb.co/BV6Gm5k/back-pain.png\",\n        \"price\": 105\n    },\n    {\n        \"key\": \"B01NBE6Y5D\",\n        \"name\": \"Tonsillectomy\",\n        \"surgeon\": \"Dr. Sudhansu\",\n        \"description\": \"A tonsillectomy is the removal of the tonsils. The surgery is done to treat difficulties in sleeping and to cure frequent infections. The procedure and recovery are discussed. When to Call the Doctor.\",\n        \"no_of_patients\": \"17\",\n        \"duration\": 20,\n        \"rating\": 3,\n        \"img\": \"https://i.ibb.co/BfmW0vw/tonslis.jpg\",\n        \"price\": 245\n    }\n]"

 /* ------------------------------------------------------------
 -----parsing json array of objects from stringified json------------
 ------------------------------------------------------------*/

const services=JSON.parse(service);
 /* --------------------------------------------
 -----finding matching object with key value------------
 ---------------------------------------------*/
const foundService = services.find(
    (service) => service.key === key
  );

 /* --------------------------------------------------
 -----Showing services details according to key------------
 --------------------------------------------------*/
    return (
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 g-5 my-5 pb-5">
            <div className="col">
            <img className="detailImg" alt="" src={foundService?.img}/>  
            </div>
            <div className="col">
            <h3> {foundService?.name}</h3>
            <h5> Surgeon : {foundService?.surgeon}</h5>
                      <h5>Surgery Duration : {foundService?.duration}</h5>
                     <h5> Patients Recovered: {foundService?.no_of_patients}</h5>
                     <Rating
                    initialRating={foundService?.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                    <h3> Price : {foundService?.price}</h3>
                    <h3> Description :</h3>
                    <h5>{foundService?.description}</h5>
            </div>
          </div>
      
        </div>
    );
};

export default ServiceDetails;

