package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Created by Sajitha on 4/19/2017.
 */
public class RequestAccessPage {
    public RequestAccessPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
}
