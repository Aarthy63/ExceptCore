import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({

    getUsers: builder.query({
      query: () => "users",
      providesTags: ["Admin"],
    }),

    getSingleUser: builder.query({
      query: ({ id }) => ({
        url: `admin/getSingleUser/${id}`,
      }),
      invalidatesTags: ['Admin'],
    }),

    addContent: builder.mutation({
      query: (contentData) => ({
        url: 'admin/contents',
        method: 'POST',
        body: contentData,
      }),
      invalidatesTags: ["Admin"],
    }),

    getContent: builder.query({
      query: () => "admin/getContents",
      providesTags: ["Admin"],
    }),

    getContentByID: builder.query({
      query: (id) => `admin/getcontent/${id}`,
      invalidatesTags: ["Admin"],
    }),

    updateContentById: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `admin/updatecontent/${id}`,
        method: 'POST',
        body: { updatedData },
      }),
      invalidatesTags: ['Admin'],
    }),

    registerSingledata: builder.query({
      query: ({ id }) => `admin/registerSingledata/${id}`,
      invalidatesTags: ["Admin"],
    }),


    adminloginData: builder.mutation({
      query: (body) => ({
        url: 'admin/adminlogin',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Admin'],
    }),

    getTwoFactorAuthentication: builder.mutation({
      query: (body) => ({
        url: 'admin/twoFactorGetCode',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin']
    }),
    twoFactorVerify: builder.mutation({
      query: (body) => ({
        url: 'admin/twoFactorVerify',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin']
    }),
    disableTwoFactorVerify: builder.mutation({
      query: (body) => ({
        url: 'admin/disableTwoFactor',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin']
    }),

    // userregiterData: builder.query({
    // query: () => ({
    //     headers:{
    //         Authorization:`Bearer ${token}`
    //     },
    //     method: 'GET',
    //     url:'/admin/registerlist'
    // }),
    // providesTags: ['Task'], }),

    adminchangepasswordData: builder.mutation({
      query: (body) => ({
        headers: {
          Authorization: `Bearer ${token}`
        },
        url: 'admin/adminpasswordchange',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Admin'],
    }),

    oldPattern: builder.mutation({
      query: (body) => ({
        url: 'admin/oldPattern',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Admin'],
    }),
    newPattern: builder.mutation({
      query: (body) => ({
        url: 'admin/newPattern',
        method: 'POST',
        body: body
      }),
      invalidatesTags: ['Admin'],
    }),
    forgetPasswordVerifymail: builder.mutation({
      query: (body) => ({
        url: 'admin/verifyEmail',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin'],
    }),
    loginTwoFactorVerify: builder.mutation({
      query: (body) => ({
        url: 'admin/loginTwoFactorVerify',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin']
    }),
    setNewPassword: builder.mutation({
      query: (body) => ({
        url: 'admin/setpassword',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin']
    }),
    setNewPattern: builder.mutation({
      query: (body) => ({
        url: 'admin/setpattern',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin']
    }),

    getKycList: builder.query({
      query: () => "admin/kycList",
      providesTags: ["Admin"],
    }),

    getKycData: builder.query({
      query: (id) => `admin/singleKycData/${id}`,
      providesTags: ["Admin"]
    }),
    ApproveKyc: builder.mutation({
      query: (body) => ({
        url: "admin/KycApprove",
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin'],
    }),
    RejectKyc: builder.mutation({
      query: (body) => ({
        url: "admin/KycReject",
        method: 'POST',
        body
      }),
      invalidatesTags: ['Admin'],
    }),

  }),

});



export const {

  useAdminloginDataMutation, useGetTwoFactorAuthenticationMutation, useAddContentMutation, useGetContentByIDQuery, useUpdateContentByIdMutation, useGetContentQuery, useRegisterSingledataQuery, useGetUsersQuery, useApproveKycMutation, useGetKycDataQuery, useRejectKycMutation, useGetKycListQuery, useTwoFactorVerifyMutation, useDisableTwoFactorVerifyMutation, useAdminchangepasswordDataMutation, useOldPatternMutation, useNewPatternMutation, useForgetPasswordVerifymailMutation, useLoginTwoFactorVerifyMutation, useSetNewPasswordMutation, useSetNewPatternMutation
} = adminApi;
