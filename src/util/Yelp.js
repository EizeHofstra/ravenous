const apiKey = 'UKqUp8zOgXajJU1ByVPpo9iT31k4yWeTuEl2H3dkveJrTF9Tbqoxx3AJpsIbXPeYZ85hBgPVeQtuxzVU1xWGPgL8O-yGdBi0xsQmkIUcvZQMMIrU8zBWF7Lb1ieQWnYx';

const Yelp = {
  search (term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          adress: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};


export default Yelp;
