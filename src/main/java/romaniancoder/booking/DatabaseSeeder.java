package romaniancoder.booking;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseSeeder implements CommandLineRunner {
    private BookingRepository bookingRepository;

    public DatabaseSeeder(BookingRepository bookingRepository){
        this.bookingRepository = bookingRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        List<HotelBooking> bookings = new ArrayList<>();

        bookings.add(new HotelBooking("Heena", 200.50, 3));
        bookings.add(new HotelBooking("Niha", 90, 4));
        bookings.add(new HotelBooking("Mihir", 140.74, 1));
        bookings.add(new HotelBooking("John", 87, 2));

        bookingRepository.save(bookings);
    }
}
