package project.v1.server;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import javax.servlet.http.HttpServletRequest;
import java.util.Optional;
import project.v1.api.PetsApi;
import project.v1.model.Pet;
import project.v1.model.Pets;

@Controller
public class PetsController implements PetsApi {

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public PetsController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    @Override
    public Optional<ObjectMapper> getObjectMapper() {
        return Optional.ofNullable(objectMapper);
    }

    @Override
    public Optional<HttpServletRequest> getRequest() {
        return Optional.ofNullable(request);
    }

    public ResponseEntity<Pets> listPets(Integer limit) {
        Pet buddy = new Pet().id(1L)
                             .name("Buddy")
                             .tag("cool");

        Pets pets = new Pets();
        pets.add(buddy);

        try {
            return new ResponseEntity<Pets>(pets, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<Pets>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
