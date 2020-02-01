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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CancelFulfillmentOrderResponse } from '../model/cancelFulfillmentOrderResponse';
import { CreateFulfillmentOrderRequest } from '../model/createFulfillmentOrderRequest';
import { CreateFulfillmentOrderResponse } from '../model/createFulfillmentOrderResponse';
import { CreateFulfillmentReturnRequest } from '../model/createFulfillmentReturnRequest';
import { CreateFulfillmentReturnResponse } from '../model/createFulfillmentReturnResponse';
import { GetFulfillmentOrderResponse } from '../model/getFulfillmentOrderResponse';
import { GetFulfillmentPreviewRequest } from '../model/getFulfillmentPreviewRequest';
import { GetFulfillmentPreviewResponse } from '../model/getFulfillmentPreviewResponse';
import { GetPackageTrackingDetailsResponse } from '../model/getPackageTrackingDetailsResponse';
import { ListAllFulfillmentOrdersResponse } from '../model/listAllFulfillmentOrdersResponse';
import { ListReturnReasonCodesResponse } from '../model/listReturnReasonCodesResponse';
import { UpdateFulfillmentOrderRequest } from '../model/updateFulfillmentOrderRequest';
import { UpdateFulfillmentOrderResponse } from '../model/updateFulfillmentOrderResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class FbaOutboundService {

    protected basePath = 'https://sellingpartnerapi-na.amazon.com/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     * Requests that Amazon stop attempting to fulfill the fulfillment order indicated by the specified order identifier.
     * @param orderId TBD
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public cancelFulfillmentOrder(orderId: string, observe?: 'body', reportProgress?: boolean): Observable<CancelFulfillmentOrderResponse>;
    public cancelFulfillmentOrder(orderId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CancelFulfillmentOrderResponse>>;
    public cancelFulfillmentOrder(orderId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CancelFulfillmentOrderResponse>>;
    public cancelFulfillmentOrder(orderId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling cancelFulfillmentOrder.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<CancelFulfillmentOrderResponse>('put',`${this.basePath}/fba/outbound/v0/fulfillmentOrders/${encodeURIComponent(String(orderId))}/cancel`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Requests that Amazon ship items from the seller&#x27;s inventory in Amazon&#x27;s fulfillment network to a destination address.
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createFulfillmentOrder(body: CreateFulfillmentOrderRequest, observe?: 'body', reportProgress?: boolean): Observable<CreateFulfillmentOrderResponse>;
    public createFulfillmentOrder(body: CreateFulfillmentOrderRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CreateFulfillmentOrderResponse>>;
    public createFulfillmentOrder(body: CreateFulfillmentOrderRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CreateFulfillmentOrderResponse>>;
    public createFulfillmentOrder(body: CreateFulfillmentOrderRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createFulfillmentOrder.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CreateFulfillmentOrderResponse>('post',`${this.basePath}/fba/outbound/v0/fulfillmentOrders`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Creates a fulfillment return.
     * @param body
     * @param orderId **TBD** s/be SellerFulfillmentOrderId.  An identifier assigned by the seller to the fulfillment order at the time it was created. The seller uses their own records to find the correct SellerFulfillmentOrderId value based on the buyer&#x27;s request to return items.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createFulfillmentReturn(body: CreateFulfillmentReturnRequest, orderId: string, observe?: 'body', reportProgress?: boolean): Observable<CreateFulfillmentReturnResponse>;
    public createFulfillmentReturn(body: CreateFulfillmentReturnRequest, orderId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CreateFulfillmentReturnResponse>>;
    public createFulfillmentReturn(body: CreateFulfillmentReturnRequest, orderId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CreateFulfillmentReturnResponse>>;
    public createFulfillmentReturn(body: CreateFulfillmentReturnRequest, orderId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createFulfillmentReturn.');
        }

        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling createFulfillmentReturn.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<CreateFulfillmentReturnResponse>('put',`${this.basePath}/fba/outbound/v0/fulfillmentOrders/${encodeURIComponent(String(orderId))}/return`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Returns the fulfillment order indicated by the specified order identifier.
     * @param orderId TBD s/be SellerFulfillmentOrderId
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFulfillmentOrder(orderId: string, observe?: 'body', reportProgress?: boolean): Observable<GetFulfillmentOrderResponse>;
    public getFulfillmentOrder(orderId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetFulfillmentOrderResponse>>;
    public getFulfillmentOrder(orderId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetFulfillmentOrderResponse>>;
    public getFulfillmentOrder(orderId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling getFulfillmentOrder.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GetFulfillmentOrderResponse>('get',`${this.basePath}/fba/outbound/v0/fulfillmentOrders/${encodeURIComponent(String(orderId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Returns a list of fulfillment order previews based on shipping criteria that you specify.
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFulfillmentPreview(body: GetFulfillmentPreviewRequest, observe?: 'body', reportProgress?: boolean): Observable<GetFulfillmentPreviewResponse>;
    public getFulfillmentPreview(body: GetFulfillmentPreviewRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetFulfillmentPreviewResponse>>;
    public getFulfillmentPreview(body: GetFulfillmentPreviewRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetFulfillmentPreviewResponse>>;
    public getFulfillmentPreview(body: GetFulfillmentPreviewRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getFulfillmentPreview.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<GetFulfillmentPreviewResponse>('post',`${this.basePath}/fba/outbound/v0/fulfillmentOrders/preview`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Returns delivery tracking information for a package in an outbound shipment for a Multi-Channel Fulfillment order.
     * @param packageNumber Unencrypted package identifier returned by the getFulfillmentOrder operation.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPackageTrackingDetails(packageNumber: number, observe?: 'body', reportProgress?: boolean): Observable<GetPackageTrackingDetailsResponse>;
    public getPackageTrackingDetails(packageNumber: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetPackageTrackingDetailsResponse>>;
    public getPackageTrackingDetails(packageNumber: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetPackageTrackingDetailsResponse>>;
    public getPackageTrackingDetails(packageNumber: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (packageNumber === null || packageNumber === undefined) {
            throw new Error('Required parameter packageNumber was null or undefined when calling getPackageTrackingDetails.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (packageNumber !== undefined && packageNumber !== null) {
            queryParameters = queryParameters.set('packageNumber', <any>packageNumber);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GetPackageTrackingDetailsResponse>('get',`${this.basePath}/fba/outbound/v0/tracking`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Returns a list of fulfillment orders fulfilled after (or at) a specified date-time, or indicated by the next token parameter
     * @param queryStartDateTime A date used for selecting fulfillment orders that were last updated after (or at) a specified time. An update is defined as any change in fulfillment order status, including the creation of a new fulfillment order.
     * @param fulfillmentMethod Indicates the intended recipient channel for the order.
     * @param nextToken A string token returned in the response to your previous request.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listAllFulfillmentOrders(queryStartDateTime?: Date, fulfillmentMethod?: Array<string>, nextToken?: string, observe?: 'body', reportProgress?: boolean): Observable<ListAllFulfillmentOrdersResponse>;
    public listAllFulfillmentOrders(queryStartDateTime?: Date, fulfillmentMethod?: Array<string>, nextToken?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListAllFulfillmentOrdersResponse>>;
    public listAllFulfillmentOrders(queryStartDateTime?: Date, fulfillmentMethod?: Array<string>, nextToken?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListAllFulfillmentOrdersResponse>>;
    public listAllFulfillmentOrders(queryStartDateTime?: Date, fulfillmentMethod?: Array<string>, nextToken?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {




        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (queryStartDateTime !== undefined && queryStartDateTime !== null) {
            queryParameters = queryParameters.set('QueryStartDateTime', <any>queryStartDateTime.toISOString());
        }
        if (fulfillmentMethod) {
            queryParameters = queryParameters.set('FulfillmentMethod', fulfillmentMethod.join(COLLECTION_FORMATS['csv']));
        }
        if (nextToken !== undefined && nextToken !== null) {
            queryParameters = queryParameters.set('NextToken', <any>nextToken);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ListAllFulfillmentOrdersResponse>('get',`${this.basePath}/fba/outbound/v0/fulfillmentOrders`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Returns a list of return reason codes for a seller SKU in a given marketplace.
     * @param sellerSKU The seller SKU for which return reason codes are required.
     * @param language The language that the TranslatedDescription property of the ReasonCodeDetails response object should be translated into.
     * @param marketplaceId The marketplace for which the seller wants return reason codes.
     * @param sellerFulfillmentOrderId The identifier assigned to the item by the seller when the fulfillment order was created. The service uses this value to determine the marketplace for which the seller wants return reason codes.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listReturnReasonCodes(sellerSKU: string, language: string, marketplaceId?: string, sellerFulfillmentOrderId?: string, observe?: 'body', reportProgress?: boolean): Observable<ListReturnReasonCodesResponse>;
    public listReturnReasonCodes(sellerSKU: string, language: string, marketplaceId?: string, sellerFulfillmentOrderId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListReturnReasonCodesResponse>>;
    public listReturnReasonCodes(sellerSKU: string, language: string, marketplaceId?: string, sellerFulfillmentOrderId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListReturnReasonCodesResponse>>;
    public listReturnReasonCodes(sellerSKU: string, language: string, marketplaceId?: string, sellerFulfillmentOrderId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (sellerSKU === null || sellerSKU === undefined) {
            throw new Error('Required parameter sellerSKU was null or undefined when calling listReturnReasonCodes.');
        }

        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling listReturnReasonCodes.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (sellerSKU !== undefined && sellerSKU !== null) {
            queryParameters = queryParameters.set('SellerSKU', <any>sellerSKU);
        }
        if (marketplaceId !== undefined && marketplaceId !== null) {
            queryParameters = queryParameters.set('MarketplaceId', <any>marketplaceId);
        }
        if (sellerFulfillmentOrderId !== undefined && sellerFulfillmentOrderId !== null) {
            queryParameters = queryParameters.set('SellerFulfillmentOrderId', <any>sellerFulfillmentOrderId);
        }
        if (language !== undefined && language !== null) {
            queryParameters = queryParameters.set('Language', <any>language);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ListReturnReasonCodesResponse>('get',`${this.basePath}/fba/outbound/v0/returnReasonCodes`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * Updates and/or requests shipment for a fulfillment order with an order hold on it.
     * @param body
     * @param orderId TBD
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateFulfillmentOrder(body: UpdateFulfillmentOrderRequest, orderId: string, observe?: 'body', reportProgress?: boolean): Observable<UpdateFulfillmentOrderResponse>;
    public updateFulfillmentOrder(body: UpdateFulfillmentOrderRequest, orderId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<UpdateFulfillmentOrderResponse>>;
    public updateFulfillmentOrder(body: UpdateFulfillmentOrderRequest, orderId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<UpdateFulfillmentOrderResponse>>;
    public updateFulfillmentOrder(body: UpdateFulfillmentOrderRequest, orderId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateFulfillmentOrder.');
        }

        if (orderId === null || orderId === undefined) {
            throw new Error('Required parameter orderId was null or undefined when calling updateFulfillmentOrder.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<UpdateFulfillmentOrderResponse>('put',`${this.basePath}/fba/outbound/v0/fulfillmentOrders/${encodeURIComponent(String(orderId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}