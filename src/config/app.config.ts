interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Media Analyst'],
  customerRoles: [],
  tenantRoles: ['Media Analyst'],
  tenantName: 'Company',
  applicationName: 'Afghanistan Tribune',
  addOns: ['file', 'notifications'],
};
