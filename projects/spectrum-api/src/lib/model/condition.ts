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
 * The condition of the item.
 */
export type Condition = 'New' | 'Used' | 'Collectible' | 'Refurbished' | 'Preorder' | 'Club';

export const Condition = {
    New: 'New' as Condition,
    Used: 'Used' as Condition,
    Collectible: 'Collectible' as Condition,
    Refurbished: 'Refurbished' as Condition,
    Preorder: 'Preorder' as Condition,
    Club: 'Club' as Condition
};