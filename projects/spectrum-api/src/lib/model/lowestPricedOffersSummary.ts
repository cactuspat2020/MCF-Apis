/**
 * Listings
 * These APIs allow access to pricing data of offers listed by authorizing selling partners as well as certain competitive pricing data related to offers by other selling partners on Amazon.
 *
 * OpenAPI spec version: v1
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BuyboxPrice } from './buyboxPrice';
import { ListingPrice } from './listingPrice';
import { LowestPrice } from './lowestPrice';
import { Money } from './money';
import { OfferSummary } from './offerSummary';

/**
 * Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers.
 */
export interface LowestPricedOffersSummary { 
    /**
     * The number of unique offers contained in NumberOfOffers.
     */
    totalOfferCount: number;
    /**
     * A list that contains the total number of offers for the item for the given conditions and fulfillment channels.
     */
    numberOfOffers?: Array<OfferSummary>;
    /**
     * A list of the lowest prices for the item.
     */
    lowestPrices?: Array<LowestPrice>;
    /**
     * A list of item prices.
     */
    buyboxPrices?: Array<BuyboxPrice>;
    listPrice?: ListingPrice;
    suggestedLowerPricePlusShipping?: Money;
    /**
     * A list that contains the total number of offers that are eligible for the Buy Box for the given conditions and fulfillment channels.
     */
    buyboxEligibleOffers?: Array<OfferSummary>;
    /**
     * When the status is ActiveButTooSoonForProcessing, this is the time when the offers will be available for processing.
     */
    offersAvailableTime?: string;
}