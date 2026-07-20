
export class AdminPage {
    /**
       * @param {import('playwright').Page} page 
       */

    constructor(page) {
        this.page = page
        this.userManagementLink = page.locator('.oxd-topbar-body-nav-tab-item', { hasText: "User Management " })
        this.jobLink = page.locator('.oxd-topbar-body-nav-tab-item', { hasText: "Job" })
        this.organizationLink = page.locator('.oxd-topbar-body-nav-tab-item', { hasText: "Organization" })
        this.qualificationsLink = page.locator('.oxd-topbar-body-nav-tab-item', { hasText: "Qualifications"})
        this.corporateBrandingLink = page.locator('.oxd-topbar-body-nav-tab-item', { hasText: "Corporate Branding" })
        this.nationalitiesLink = page.locator('.oxd-topbar-body-nav-tab-item', { hasText: "Nationalities" })
        this.configurationLink = page.locator('.oxd-topbar-body-nav-tab-item', { hasText: "Configuration " })
    }

    async openAdminPage() {
        await this.page.getByRole('link', { name: 'Admin' }).click()
        await this.page.waitForLoadState('networkidle')
    }

    async openSubmodule(submoduleName) {
        const moduleLocator = this.page.locator('.oxd-topbar-body-nav-tab-item', { hasText: submoduleName })
        await moduleLocator.click()
        await this.page.waitForLoadState('networkidle')
    }
}