export class ActionUtils {
   

    static async uploadFile(locator, filePath) {
        await locator.setInputFiles(filePath);
    }

    

    static async uploadUsingFileChooser(page, locator, filePath) {

        const fileChooserPromise = page.waitForEvent('filechooser');

        await locator.click();

        const fileChooser = await fileChooserPromise;

        await fileChooser.setFiles(filePath);
    }

}

