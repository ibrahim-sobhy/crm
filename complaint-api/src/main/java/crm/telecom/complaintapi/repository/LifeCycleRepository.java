package crm.telecom.complaintapi.repository;

import crm.telecom.complaintapi.model.LifeCycle;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class LifeCycleRepository {
    public List<LifeCycle> findAll() {
        return Arrays.asList(new LifeCycle("Billing"), new LifeCycle("Provisioning"));
    }
}