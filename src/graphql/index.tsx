/* DO NOT EDIT! This file is auto-generated by graphql-code-generator - see `codegen.yml` */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CommissionType {
  Paydrum = 'PAYDRUM',
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export enum RedeemType {
  Remote = 'REMOTE',
  Scan = 'SCAN',
  RemoteScan = 'REMOTE_SCAN'
}

export enum LimitRedemptionType {
  Budget = 'BUDGET',
  Redemption = 'REDEMPTION',
  Unlimited = 'UNLIMITED'
}

export type LimitRedemption = {
  __typename?: 'LimitRedemption';
  type?: Maybe<LimitRedemptionType>;
  value?: Maybe<Scalars['Float']>;
};

export enum ImageStyleName {
  Cropped = 'cropped',
  Large = 'large',
  Medium = 'medium',
  Original = 'original',
  OriginalBuyer = 'originalBuyer',
  Small = 'small',
  Square = 'square'
}

export type ImageStyle = {
  __typename?: 'ImageStyle';
  name?: Maybe<ImageStyleName>;
  path?: Maybe<Scalars['String']>;
};

export enum MediaObjectType {
  Video = 'VIDEO',
  Image = 'IMAGE'
}

export type MediaObject = {
  __typename?: 'MediaObject';
  type?: Maybe<MediaObjectType>;
  url?: Maybe<Scalars['String']>;
  styles?: Maybe<Array<Maybe<ImageStyle>>>;
};

export enum IntegrationType {
  Shopify = 'shopify',
  Standard = 'standard'
}

export type Business = {
  __typename?: 'Business';
  id: Scalars['ID'];
  businessName?: Maybe<Scalars['String']>;
  coverImage?: Maybe<MediaObject>;
  email?: Maybe<Scalars['String']>;
  imagesS3?: Maybe<Array<MediaObject>>;
  integrationType?: Maybe<IntegrationType>;
};

export type DrumRedemption = {
  __typename?: 'DrumRedemption';
  payDrum?: Maybe<Scalars['Float']>;
  limitRedemption?: Maybe<LimitRedemption>;
  loyaltyOffer?: Maybe<Scalars['Int']>;
  isMultipleTimes?: Maybe<Scalars['Boolean']>;
  redeemType?: Maybe<RedeemType>;
  payDrummer?: Maybe<Scalars['Float']>;
  commissionType?: Maybe<CommissionType>;
  isRequireMinimumPurchaseAmount?: Maybe<Scalars['Boolean']>;
  buyerSpendPurchaseAmount?: Maybe<Scalars['Float']>;
};

export type DrummerEducationLinks = {
  __typename?: 'DrummerEducationLinks';
  title: Scalars['String'];
  url: Scalars['String'];
};

export type DrummerNote = {
  __typename?: 'DrummerNote';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<File>>;
};

export type File = {
  __typename?: 'File';
  key: Scalars['String'];
  domain: Scalars['String'];
};

export enum RewardActionType {
  NavigateToSpecificPage = 'navigate_to_specific_page',
  CompleteAPurchase = 'complete_a_purchase'
}

export type Offer = {
  __typename?: 'Offer';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  offerDlpUrl?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<MediaObject>;
  drumRedemption?: Maybe<DrumRedemption>;
  photos?: Maybe<Array<MediaObject>>;
  drummerEducationLinks?: Maybe<Array<DrummerEducationLinks>>;
  endedAt?: Maybe<Scalars['String']>;
  drummerNote?: Maybe<DrummerNote>;
  rewardActionType?: Maybe<RewardActionType>;
};

export enum ReferralPageStateConfigPageStyleBackgroundType {
  Color = 'color',
  Image = 'image'
}

export type ReferralPageStateConfigPageStyleBackground = {
  __typename?: 'ReferralPageStateConfigPageStyleBackground';
  backgroundType: ReferralPageStateConfigPageStyleBackgroundType;
  backgroundImage?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  backgroundImageNoncompiled?: Maybe<Scalars['String']>;
};

export type ReferralPageStateConfigPageStyle = {
  __typename?: 'ReferralPageStateConfigPageStyle';
  buttonColor: Scalars['String'];
  textColor: Scalars['String'];
  cornersRadius: Scalars['Int'];
  fontName: Scalars['String'];
  background: ReferralPageStateConfigPageStyleBackground;
};

export type ReferralPageStateConfig = {
  __typename?: 'ReferralPageStateConfig';
  title: Scalars['String'];
  body: Scalars['String'];
};

export type ReferralPageJoinState = {
  __typename?: 'ReferralPageJoinState';
  compiledConfig: ReferralPageStateConfig;
  config: ReferralPageStateConfig;
  offers?: Maybe<Array<Maybe<Offer>>>;
};

export type ReferralPageShareState = {
  __typename?: 'ReferralPageShareState';
  compiledConfig: ReferralPageStateConfig;
  config: ReferralPageStateConfig;
};

export type ReferralPageThankYouState = {
  __typename?: 'ReferralPageThankYouState';
  compiledConfig: ReferralPageStateConfig;
  config: ReferralPageStateConfig;
};

export type ReferralPageStates = {
  __typename?: 'ReferralPageStates';
  join: ReferralPageJoinState;
  share: ReferralPageShareState;
  thankYou: ReferralPageThankYouState;
};

export type ReferralPageShopifyPageConfig = {
  __typename?: 'ReferralPageShopifyPageConfig';
  pageId?: Maybe<Scalars['String']>;
  shopAddress?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  body: Scalars['String'];
  userDidCreateTheShopifyPage: Scalars['Boolean'];
  isHidden: Scalars['Boolean'];
  pageUrl?: Maybe<Scalars['String']>;
  adminPageUrl?: Maybe<Scalars['String']>;
  syncedOn?: Maybe<Scalars['String']>;
};

export type ReferralPage = {
  __typename?: 'ReferralPage';
  id: Scalars['String'];
  webId: Scalars['String'];
  url: Scalars['String'];
  iframeUrl: Scalars['String'];
  business: Business;
  states: ReferralPageStates;
  pageStyle: ReferralPageStateConfigPageStyle;
  shopifyPageConfig: ReferralPageShopifyPageConfig;
  userDidUpdateThePage: Scalars['Boolean'];
  shareAppLink: Scalars['String'];
};

export type ErrorResponseDetailField = {
  __typename?: 'ErrorResponseDetailField';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  error?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  detailFields?: Maybe<Array<ErrorResponseDetailField>>;
};

export type ReferralPageResult = ReferralPage | ErrorResponse;

export type GetReferralPageInput = {
  referralPageWebId: Scalars['String'];
};

export type SubmitPotentialDrummerEmailInput = {
  email: Scalars['String'];
  referralPageWebId: Scalars['String'];
};

export enum CustomerStatus {
  NotInvited = 'notInvited',
  Pending = 'pending',
  Subscribed = 'subscribed',
  Unsubscribed = 'unsubscribed'
}

export type CustomerTag = {
  __typename?: 'CustomerTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export enum CustomerSource {
  CsvUpload = 'csvUpload',
  ManualAdd = 'manualAdd',
  Shopify = 'shopify',
  ReferralPage = 'referralPage'
}

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  businessId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  status?: Maybe<CustomerStatus>;
  phone?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  jobId?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  lastContacted?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<CustomerTag>>>;
  referrals?: Maybe<Scalars['Int']>;
  totalReward?: Maybe<Scalars['Float']>;
  totalSales?: Maybe<Scalars['Float']>;
  source?: Maybe<CustomerSource>;
};

export enum CustomerNotAddedReasonCode {
  DuplicateEmail = 'duplicateEmail',
  NoRequiredFields = 'noRequiredFields'
}

export type CustomerNotAddedReason = {
  __typename?: 'CustomerNotAddedReason';
  code?: Maybe<CustomerNotAddedReasonCode>;
  badRecord?: Maybe<Customer>;
};

export type AddCustomersResult = {
  __typename?: 'AddCustomersResult';
  total?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<Customer>>>;
  notAdded?: Maybe<Scalars['Int']>;
  notAddedReasons?: Maybe<Array<Maybe<CustomerNotAddedReason>>>;
};

export type SubmitPotentialDrummerEmailResponse = {
  __typename?: 'SubmitPotentialDrummerEmailResponse';
  success: Scalars['Boolean'];
  didCreatePotentialDrummerRecord: Scalars['Boolean'];
  potentialDrummerWasCreatedWithinNSeconds: Scalars['Boolean'];
  nSeconds: Scalars['Int'];
  realDrummerExists: Scalars['Boolean'];
  drummerId: Scalars['String'];
  addCustomersResult?: Maybe<AddCustomersResult>;
};

export type SubmitPotentialDrummerEmailResult = SubmitPotentialDrummerEmailResponse | ErrorResponse;

export type OfferInput = {
  id: Scalars['String'];
  title: Scalars['String'];
};

export type CreateSharingLinkInput = {
  email: Scalars['String'];
  referralPageWebId: Scalars['String'];
  offers?: Maybe<Array<OfferInput>>;
};

export type CreateSharingLinkResponse = {
  __typename?: 'CreateSharingLinkResponse';
  success: Scalars['Boolean'];
  didCreatePotentialDrummerRecord: Scalars['Boolean'];
  realDrummerExists: Scalars['Boolean'];
  url: Scalars['String'];
};

export type CreateSharingLinkResult = CreateSharingLinkResponse | ErrorResponse;

export type SendEmailInput = {
  from?: Maybe<Scalars['String']>;
  to: Scalars['String'];
  offerIds: Array<Scalars['String']>;
  identityId?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  emailBody?: Maybe<Scalars['String']>;
  isRemind?: Maybe<Scalars['Boolean']>;
};

export type SendEmailResponse = {
  __typename?: 'SendEmailResponse';
  success: Scalars['Boolean'];
};

export type SendEmailResult = SendEmailResponse | ErrorResponse;

export type Query = {
  __typename?: 'Query';
  referralPage?: Maybe<ReferralPageResult>;
};


export type QueryReferralPageArgs = {
  input: GetReferralPageInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  submitPotentialDrummerEmail: SubmitPotentialDrummerEmailResult;
  createSharingLinkFromReferralPage: CreateSharingLinkResult;
  sendEmail: SendEmailResult;
};


export type MutationSubmitPotentialDrummerEmailArgs = {
  input: SubmitPotentialDrummerEmailInput;
};


export type MutationCreateSharingLinkFromReferralPageArgs = {
  input: CreateSharingLinkInput;
};


export type MutationSendEmailArgs = {
  input?: Maybe<SendEmailInput>;
};

export type CreateSharingLinkFromReferralPageMutationVariables = Exact<{
  input: CreateSharingLinkInput;
}>;


export type CreateSharingLinkFromReferralPageMutation = (
  { __typename?: 'Mutation' }
  & { createSharingLinkFromReferralPage: (
    { __typename?: 'CreateSharingLinkResponse' }
    & Pick<CreateSharingLinkResponse, 'success' | 'url'>
  ) | (
    { __typename?: 'ErrorResponse' }
    & Pick<ErrorResponse, 'error' | 'code' | 'message' | 'details'>
  ) }
);

export type SendEmailMutationVariables = Exact<{
  input: SendEmailInput;
}>;


export type SendEmailMutation = (
  { __typename?: 'Mutation' }
  & { sendEmail: (
    { __typename?: 'SendEmailResponse' }
    & Pick<SendEmailResponse, 'success'>
  ) | (
    { __typename?: 'ErrorResponse' }
    & Pick<ErrorResponse, 'error' | 'code' | 'message' | 'details'>
  ) }
);

export type SubmitPotentialDrummerEmailMutationVariables = Exact<{
  input: SubmitPotentialDrummerEmailInput;
}>;


export type SubmitPotentialDrummerEmailMutation = (
  { __typename?: 'Mutation' }
  & { submitPotentialDrummerEmail: (
    { __typename?: 'SubmitPotentialDrummerEmailResponse' }
    & Pick<SubmitPotentialDrummerEmailResponse, 'success' | 'didCreatePotentialDrummerRecord' | 'realDrummerExists' | 'drummerId'>
  ) | (
    { __typename?: 'ErrorResponse' }
    & Pick<ErrorResponse, 'error' | 'code' | 'message' | 'details'>
  ) }
);

export type GetReferralPageQueryVariables = Exact<{
  input: GetReferralPageInput;
}>;


export type GetReferralPageQuery = (
  { __typename?: 'Query' }
  & { referralPage?: Maybe<(
    { __typename?: 'ReferralPage' }
    & Pick<ReferralPage, 'url' | 'shareAppLink' | 'userDidUpdateThePage'>
    & { business: (
      { __typename?: 'Business' }
      & Pick<Business, 'id' | 'businessName'>
      & { imagesS3?: Maybe<Array<(
        { __typename?: 'MediaObject' }
        & Pick<MediaObject, 'type' | 'url'>
        & { styles?: Maybe<Array<Maybe<(
          { __typename?: 'ImageStyle' }
          & Pick<ImageStyle, 'name' | 'path'>
        )>>> }
      )>> }
    ), states: (
      { __typename?: 'ReferralPageStates' }
      & { join: (
        { __typename?: 'ReferralPageJoinState' }
        & { config: (
          { __typename?: 'ReferralPageStateConfig' }
          & Pick<ReferralPageStateConfig, 'title' | 'body'>
        ), offers?: Maybe<Array<Maybe<(
          { __typename?: 'Offer' }
          & Pick<Offer, 'id' | 'title' | 'description' | 'offerDlpUrl' | 'endedAt'>
          & { coverPhoto?: Maybe<(
            { __typename?: 'MediaObject' }
            & Pick<MediaObject, 'type' | 'url'>
            & { styles?: Maybe<Array<Maybe<(
              { __typename?: 'ImageStyle' }
              & Pick<ImageStyle, 'name' | 'path'>
            )>>> }
          )>, photos?: Maybe<Array<(
            { __typename?: 'MediaObject' }
            & { styles?: Maybe<Array<Maybe<(
              { __typename?: 'ImageStyle' }
              & Pick<ImageStyle, 'name' | 'path'>
            )>>> }
          )>>, drumRedemption?: Maybe<(
            { __typename?: 'DrumRedemption' }
            & Pick<DrumRedemption, 'commissionType' | 'payDrum' | 'isRequireMinimumPurchaseAmount' | 'buyerSpendPurchaseAmount'>
            & { limitRedemption?: Maybe<(
              { __typename?: 'LimitRedemption' }
              & Pick<LimitRedemption, 'type' | 'value'>
            )> }
          )>, drummerNote?: Maybe<(
            { __typename?: 'DrummerNote' }
            & Pick<DrummerNote, 'description'>
          )>, drummerEducationLinks?: Maybe<Array<(
            { __typename?: 'DrummerEducationLinks' }
            & Pick<DrummerEducationLinks, 'title' | 'url'>
          )>> }
        )>>> }
      ), share: (
        { __typename?: 'ReferralPageShareState' }
        & { config: (
          { __typename?: 'ReferralPageStateConfig' }
          & Pick<ReferralPageStateConfig, 'title' | 'body'>
        ) }
      ), thankYou: (
        { __typename?: 'ReferralPageThankYouState' }
        & { config: (
          { __typename?: 'ReferralPageStateConfig' }
          & Pick<ReferralPageStateConfig, 'title' | 'body'>
        ) }
      ) }
    ), pageStyle: (
      { __typename?: 'ReferralPageStateConfigPageStyle' }
      & Pick<ReferralPageStateConfigPageStyle, 'buttonColor' | 'textColor' | 'cornersRadius' | 'fontName'>
      & { background: (
        { __typename?: 'ReferralPageStateConfigPageStyleBackground' }
        & Pick<ReferralPageStateConfigPageStyleBackground, 'backgroundType' | 'backgroundImage' | 'backgroundColor'>
      ) }
    ), shopifyPageConfig: (
      { __typename?: 'ReferralPageShopifyPageConfig' }
      & Pick<ReferralPageShopifyPageConfig, 'pageId' | 'shopAddress' | 'title' | 'isHidden' | 'userDidCreateTheShopifyPage' | 'pageUrl' | 'adminPageUrl'>
    ) }
  ) | (
    { __typename?: 'ErrorResponse' }
    & Pick<ErrorResponse, 'error' | 'code' | 'message' | 'details'>
  )> }
);


export const CreateSharingLinkFromReferralPageDocument = gql`
    mutation CreateSharingLinkFromReferralPage($input: CreateSharingLinkInput!) {
  createSharingLinkFromReferralPage(input: $input) {
    ... on CreateSharingLinkResponse {
      success
      url
    }
    ... on ErrorResponse {
      error
      code
      message
      details
    }
  }
}
    `;
export type CreateSharingLinkFromReferralPageMutationFn = ApolloReactCommon.MutationFunction<CreateSharingLinkFromReferralPageMutation, CreateSharingLinkFromReferralPageMutationVariables>;

/**
 * __useCreateSharingLinkFromReferralPageMutation__
 *
 * To run a mutation, you first call `useCreateSharingLinkFromReferralPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSharingLinkFromReferralPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSharingLinkFromReferralPageMutation, { data, loading, error }] = useCreateSharingLinkFromReferralPageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSharingLinkFromReferralPageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSharingLinkFromReferralPageMutation, CreateSharingLinkFromReferralPageMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSharingLinkFromReferralPageMutation, CreateSharingLinkFromReferralPageMutationVariables>(CreateSharingLinkFromReferralPageDocument, baseOptions);
      }
export type CreateSharingLinkFromReferralPageMutationHookResult = ReturnType<typeof useCreateSharingLinkFromReferralPageMutation>;
export type CreateSharingLinkFromReferralPageMutationResult = ApolloReactCommon.MutationResult<CreateSharingLinkFromReferralPageMutation>;
export type CreateSharingLinkFromReferralPageMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSharingLinkFromReferralPageMutation, CreateSharingLinkFromReferralPageMutationVariables>;
export const SendEmailDocument = gql`
    mutation SendEmail($input: SendEmailInput!) {
  sendEmail(input: $input) {
    ... on SendEmailResponse {
      success
    }
    ... on ErrorResponse {
      error
      code
      message
      details
    }
  }
}
    `;
export type SendEmailMutationFn = ApolloReactCommon.MutationFunction<SendEmailMutation, SendEmailMutationVariables>;

/**
 * __useSendEmailMutation__
 *
 * To run a mutation, you first call `useSendEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendEmailMutation, { data, loading, error }] = useSendEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSendEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendEmailMutation, SendEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<SendEmailMutation, SendEmailMutationVariables>(SendEmailDocument, baseOptions);
      }
export type SendEmailMutationHookResult = ReturnType<typeof useSendEmailMutation>;
export type SendEmailMutationResult = ApolloReactCommon.MutationResult<SendEmailMutation>;
export type SendEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<SendEmailMutation, SendEmailMutationVariables>;
export const SubmitPotentialDrummerEmailDocument = gql`
    mutation SubmitPotentialDrummerEmail($input: SubmitPotentialDrummerEmailInput!) {
  submitPotentialDrummerEmail(input: $input) {
    ... on SubmitPotentialDrummerEmailResponse {
      success
      didCreatePotentialDrummerRecord
      realDrummerExists
      drummerId
    }
    ... on ErrorResponse {
      error
      code
      message
      details
    }
  }
}
    `;
export type SubmitPotentialDrummerEmailMutationFn = ApolloReactCommon.MutationFunction<SubmitPotentialDrummerEmailMutation, SubmitPotentialDrummerEmailMutationVariables>;

/**
 * __useSubmitPotentialDrummerEmailMutation__
 *
 * To run a mutation, you first call `useSubmitPotentialDrummerEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitPotentialDrummerEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitPotentialDrummerEmailMutation, { data, loading, error }] = useSubmitPotentialDrummerEmailMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubmitPotentialDrummerEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SubmitPotentialDrummerEmailMutation, SubmitPotentialDrummerEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<SubmitPotentialDrummerEmailMutation, SubmitPotentialDrummerEmailMutationVariables>(SubmitPotentialDrummerEmailDocument, baseOptions);
      }
export type SubmitPotentialDrummerEmailMutationHookResult = ReturnType<typeof useSubmitPotentialDrummerEmailMutation>;
export type SubmitPotentialDrummerEmailMutationResult = ApolloReactCommon.MutationResult<SubmitPotentialDrummerEmailMutation>;
export type SubmitPotentialDrummerEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<SubmitPotentialDrummerEmailMutation, SubmitPotentialDrummerEmailMutationVariables>;
export const GetReferralPageDocument = gql`
    query GetReferralPage($input: GetReferralPageInput!) {
  referralPage(input: $input) {
    ... on ReferralPage {
      url
      shareAppLink
      business {
        id
        businessName
        imagesS3 {
          type
          url
          styles {
            name
            path
          }
        }
      }
      states {
        join {
          config {
            title
            body
          }
          offers {
            id
            title
            description
            offerDlpUrl
            coverPhoto {
              type
              url
              styles {
                name
                path
              }
            }
            photos {
              styles {
                name
                path
              }
            }
            drumRedemption {
              commissionType
              payDrum
              isRequireMinimumPurchaseAmount
              limitRedemption {
                type
                value
              }
              buyerSpendPurchaseAmount
            }
            drummerNote {
              description
            }
            drummerEducationLinks {
              title
              url
            }
            endedAt
          }
        }
        share {
          config {
            title
            body
          }
        }
        thankYou {
          config {
            title
            body
          }
        }
      }
      pageStyle {
        buttonColor
        textColor
        cornersRadius
        fontName
        background {
          backgroundType
          backgroundImage
          backgroundColor
        }
      }
      userDidUpdateThePage
      shopifyPageConfig {
        pageId
        shopAddress
        title
        isHidden
        userDidCreateTheShopifyPage
        pageUrl
        adminPageUrl
      }
    }
    ... on ErrorResponse {
      error
      code
      message
      details
    }
  }
}
    `;

/**
 * __useGetReferralPageQuery__
 *
 * To run a query within a React component, call `useGetReferralPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReferralPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReferralPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetReferralPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetReferralPageQuery, GetReferralPageQueryVariables>) {
        return ApolloReactHooks.useQuery<GetReferralPageQuery, GetReferralPageQueryVariables>(GetReferralPageDocument, baseOptions);
      }
export function useGetReferralPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetReferralPageQuery, GetReferralPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetReferralPageQuery, GetReferralPageQueryVariables>(GetReferralPageDocument, baseOptions);
        }
export type GetReferralPageQueryHookResult = ReturnType<typeof useGetReferralPageQuery>;
export type GetReferralPageLazyQueryHookResult = ReturnType<typeof useGetReferralPageLazyQuery>;
export type GetReferralPageQueryResult = ApolloReactCommon.QueryResult<GetReferralPageQuery, GetReferralPageQueryVariables>;