import React, { FC, useEffect, useState } from 'react';
import { ApolloError } from '@apollo/client';
import { useRouter } from 'next/router';
import IconButton from 'components/IconButton';

import {
  useCreateSharingLinkFromReferralPageMutation,
  CreateSharingLinkFromReferralPageMutation
} from '../../graphql';

const CreateOpportunityPage: FC = () => {
  const router = useRouter();

  const [
    createSharingLinkFromReferralPage,
    //{ loading: createSharingLinkFromReferralPageLoading },
  ] = useCreateSharingLinkFromReferralPageMutation({
    onCompleted: (data: CreateSharingLinkFromReferralPageMutation) => {
      console.log("link Creation data: ", data);
    },
    onError: (error: ApolloError) => {
      console.log(error);
    },
  });

  const createLink = () => {
    alert("Test request: link created");

    //Test data
    const createLinkInputData = {
      variables: {
        input: {
          referralPageWebId: "SvlM",
          email: "demo+business@drum.io",
          offers: [{
            id: "OFFER_b5dd00d74b1e0e09",
            title: "-- <<  H  >> -- ** :: ** :: ** -- <<  E  >> -- ** :: ** :: ** -- <<  Y  >> --"
          }]
        },
      },
    };

    createSharingLinkFromReferralPage(createLinkInputData);
  }
  return (
    <>
      {console.log(router)}
      DAT EEZ DA OFFAH PAGE
      <IconButton onClick={createLink}>Pootis</IconButton>
    </>
  );
};

export default CreateOpportunityPage;
