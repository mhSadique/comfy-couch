import React from 'react';
import Banner from './HomepageSections/Banner/Banner';
import CompaniesWePartnerWith from './HomepageSections/CompaniesWePartnerWith/CompaniesWePartnerWith';
import ProductsContainer from './HomepageSections/ProductsContainer/ProductsContainer';
import ReviewAndRating from './HomepageSections/ReviewAndRating/ReviewAndRating';

const Homepage = () => {
    return (
        <>
            <Banner />
            <ProductsContainer />
            <ReviewAndRating />
            <CompaniesWePartnerWith />
        </>
    );
};

export default Homepage;