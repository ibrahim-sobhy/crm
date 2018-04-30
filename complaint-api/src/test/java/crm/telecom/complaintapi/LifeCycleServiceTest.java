package crm.telecom.complaintapi;

import crm.telecom.complaintapi.model.LifeCycle;
import crm.telecom.complaintapi.repository.LifeCycleRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;



@RunWith(SpringRunner.class)
@SpringBootTest
public class LifeCycleServiceTest {


    @Autowired
    private LifeCycleService lifeCycleService;

    @MockBean
    private LifeCycleRepository repository;

    @Before
    public void setup() {

        Mockito.when(repository.findAll()).thenReturn(Arrays.asList(
                new LifeCycle("LifeCycle1"),
                new LifeCycle("LifeCycle2")
        ));
    }

    @Test
    public void findAll() {
        List<LifeCycle> expectted = Arrays.asList(
                new LifeCycle("LifeCycle1"),
                new LifeCycle("LifeCycle2"));
        List<LifeCycle> lifecycles = lifeCycleService.findAll();

       assertThat(lifecycles).isEqualTo(expectted);
    }
}