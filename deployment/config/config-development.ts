/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://nancy.d3317vxvbi870t.amplifyapp.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '1m2k9p97so9o1himfsmtjm3kdd',
  USER_POOL_ID: 'us-east-1_Xkeq4OghR',
  IDENTITY_POOL_ID: 'us-east-1:a76311f9d1d5-473f-8ef5-1af2d0c9b949',
  GRAPHQL_ENDPOINT: 'https://urvhige3ljgdjcnndfepxk6vwa.appsync-api.us-east-1.amazonaws.com/graphql',
};

export default configDevelopment;
