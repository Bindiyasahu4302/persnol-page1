const destinations = [
    { name: "Agra", activities: ["Taj Mahal", "Agra Fort"], cost: "$300", duration: "2 days", image: "https://static.toiimg.com/photo/msid-31346158,width-96,height-65.cms" },
    { name: "Jaipur", activities: ["Hawa Mahal", "Amber Fort"], cost: "$400", duration: "3 days", image: "https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg" },
    { name: "Goa", activities: ["Beaches", "Water Sports"], cost: "$500", duration: "5 days", image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/08/BlogImage-16Aug_SouthGoa_Image-12-1.jpg" },
    { name: "Varanasi", activities: ["Ganga Aarti", "Sarnath"], cost: "$250", duration: "2 days", image: "https://www.travelanddestinations.com/wp-content/uploads/2021/07/Varanasi-waterfront.jpg" },
    { name: "Kerala", activities: ["Backwaters", "Tea Plantations"], cost: "$600", duration: "5 days", image: "https://www.honeymoonbug.com/blog/wp-content/uploads/2022/02/kerala-tour-packages.jpg" },
    { name: "Delhi", activities: ["Red Fort", "India Gate"], cost: "$350", duration: "3 days", image: "https://www.kalitravel.net/blog/wp-content/uploads/delhi-itinerary-india-gate-sunset-new-delhi.webp" },
    { name: "Udaipur", activities: ["City Palace", "Lake Pichola"], cost: "$450", duration: "4 days", image: "https://www.thehosteller.com/_next/image?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fcover%20photo.jpg%2Fcover%20photo-1696914123916.jpg&w=2048&q=75" },
    { name: "Mysore", activities: ["Mysore Palace", "Chamundi Hill"], cost: "$300", duration: "3 days", image: "https://www.sandeshtheprince.com/wp-content/uploads/2020/07/chamundihills.jpg"},
    { name: "Leh-Ladakh", activities: ["Pangong Lake", "Nubra Valley"], cost: "$800", duration: "7 days", image: "https://www.ekashmirtourism.com/leh-ladakh-packages/wp-content/uploads/2023/01/image-6.jpg" },
    { name: "Rishikesh", activities: ["River Rafting", "Yoga Retreats"], cost: "$400", duration: "3 days", image: "https://www.agniyogaindia.com/wp-content/uploads/2021/11/Yoga-Rishikesh.jpg" },
    { name: "Andaman Islands", activities: ["Snorkeling", "Beach Hopping"], cost: "$700", duration: "6 days", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6b/73/46.jpg" },
    { name: "Raipur", activities: ["Mahant Ghasidas Memorial Museum", "Nandan Van Zoo"], cost: "$200", duration: "2 days", image: "https://img.naidunia.com/naidunia/ndnimg/18042023/18_04_2023-mahant_ghasidas_museum_in_chhattisgarh_2023418_14111.jpg" },
    { name: "Bilaspur", activities: ["Achanakmar Wildlife Sanctuary", "Kanan Pendari Zoo"], cost: "$250", duration: "3 days", image: "https://bansalnews.com/wp-content/uploads/2024/07/Achanakmar-Sanctuary.jpg" },
    { name: "Jagdalpur", activities: ["Kanger Valley National Park", "Chitrakote Waterfall"], cost: "$300", duration: "4 days", image: "https://www.thehitavada.com/Encyc/2023/7/25/Kanger-Valley-National-Park_202307251157043481_H@@IGHT_300_W@@IDTH_500.jpg" },
    { name: "Dantewada", activities: ["Buddha Jatara", "Dantewada Temple"], cost: "$220", duration: "2 days", image: "https://www.seawatersports.com/images/places/dantewada-in-chattisgarh.jpg" },
    { name: "Korba", activities: ["Koriya Coal Fields", "Gehra Waterfall"], cost: "$280", duration: "3 days", image: "https://i.ytimg.com/vi/iTKxkVQ50sY/maxresdefault.jpg" },
    { name: "Raigarh", activities: ["Raigarh Fort", "Brahmani River"], cost: "$350", duration: "4 days", image: "https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2024/06/pali-scaled.jpeg" },
    { name: "Kanker", activities: ["Kanker Palace", "Kanker Wildlife Sanctuary"], cost: "$260", duration: "3 days", image: "https://im.hunt.in/cg/Chhatis/Kanker/City-Guide/makaja.jpg" },
    { name: "Narayanpur", activities: ["Kakra Pahad", "Local Tribal Culture"], cost: "$240", duration: "2 days", image: "https://cdn.s3waas.gov.in/s32afe4567e1bf64d32a5527244d104cea/uploads/bfi_thumb/2018122774-olw7non95crqyj5lb1s5xs8pdtrlxg4hz2x2cvo7a8.jpg" },
    { name: "Bijapur", activities: ["Bijapur Fort", "Tirathgarh Waterfall"], cost: "$290", duration: "4 days", image: "https://i0.wp.com/www.vibrantfootsteps.com/wp-content/uploads/2022/12/DSC_2053-PS.jpg?resize=1024%2C678&ssl=1" },
    { name: "Sukma", activities: ["Mardintola", "Local Handicrafts"], cost: "$230", duration: "3 days", image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/maoist_rep_pti.jpg?size=690:388" }
    
];

function searchDestinations() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchTerm) || 
        destination.activities.some(activity => activity.toLowerCase().includes(searchTerm))
    );

    const destinationContainer = document.getElementById('destinations');
    
    if (filteredDestinations.length > 0) {
        destinationContainer.innerHTML = filteredDestinations.map(destination => 
            `<div class="destination-item">
                <img src="${destination.image}" alt="${destination.name}" class="destination-img">
                <h3>${destination.name}</h3>
                <p>Activities: ${destination.activities.join(', ')}</p>
                <p>Cost: ${destination.cost}</p>
                <p>Duration: ${destination.duration}</p>
                <button onclick="addToItinerary('${destination.name}')">Add to Itinerary</button>
            </div>`
        ).join('');
    } else {
        destinationContainer.innerHTML = '<p>No destinations found.</p>';
    }
}

function addToItinerary(destinationName) {
    let itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];
    
    if (!itinerary.includes(destinationName)) {
        itinerary.push(destinationName);
        localStorage.setItem('itinerary', JSON.stringify(itinerary));
        updateItinerary();
    } else {
        alert(`${destinationName} is already in your itinerary.`);
    }
}

function updateItinerary() {
    const itinerary = JSON.parse(localStorage.getItem('itinerary')) || [];
    const itineraryList = document.getElementById('itinerary-list');
    
    itineraryList.innerHTML = itinerary.map(destinationName => `<li>${destinationName}</li>`).join('');
}

function clearItinerary() {
    localStorage.removeItem('itinerary');
    updateItinerary();
}

function clearSearch() {
    document.getElementById('search').value = '';
    searchDestinations(); 
}

updateItinerary();
