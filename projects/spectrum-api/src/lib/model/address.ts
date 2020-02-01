/**
 * Selling Partner APIs for Fulfillment Outbound
 * The Selling Partner API for Fulfillment Outbound lets you fulfill Multi-Channel Fulfillment orders using your inventory in Amazon's fulfillment network. You can get information on potential and existing fulfillment orders.
 *
 * OpenAPI spec version: v0
 * Contact: marketplaceapitest@amazon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface Address { 
    /**
     * Recipient's name.
     */
    name: string;
    /**
     * Recipient's street address information.
     */
    line1: string;
    /**
     * Additional street address information, if required.
     */
    line2?: string;
    /**
     * Additional street address information, if required.
     */
    line3?: string;
    /**
     * Recipient's district or county.
     */
    districtOrCounty?: string;
    /**
     * Recipient's city.
     */
    city?: string;
    /**
     * Recipient's state or province code.
     */
    stateOrProvinceCode: string;
    /**
     * Recipient's country code.
     */
    countryCode: string;
    /**
     * The postal code (required for shipments to the U.S.).
     */
    postalCode?: string;
    /**
     * Recipient's phone number.
     */
    phoneNumber?: string;
}