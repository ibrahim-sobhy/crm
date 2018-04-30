package crm.telecom.complaintapi;

import crm.telecom.complaintapi.model.LifeCycle;
import crm.telecom.complaintapi.repository.LifeCycleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("complaint/api/")
public class LifeCycleService {
    @GetMapping("/")
    public List<LifeCycle> findAll() {
        return repository.findAll();
    }

    @Autowired
    private LifeCycleRepository repository;

}
