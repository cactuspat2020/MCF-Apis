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

/**
 * Information about the seller's feedback, including the percentage of positive feedback, and the total count of feedback received.
 */
export interface SellerFeedback { 
    /**
     * The percentage of positive feedback for the seller in the past 365 days.
     */
    sellerPositiveFeedbackRating?: number;
    /**
     * The count of feedback received about the seller.
     */
    feedbackCount: number;
}