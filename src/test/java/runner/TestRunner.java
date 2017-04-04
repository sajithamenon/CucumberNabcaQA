package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Sajitha on 3/31/2017.
 */


@RunWith(Cucumber.class)
@CucumberOptions(features={"C:\\Users\\Nabca Cucumber\\src\\test\\java\\Features"},
        format={"json:target/cucumber.json","html:target/site/cucumber-pretty"},
glue="Steps")
public class TestRunner {
}
