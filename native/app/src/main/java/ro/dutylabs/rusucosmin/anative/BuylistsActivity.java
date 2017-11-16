package ro.dutylabs.rusucosmin.anative;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class BuylistsActivity extends AppCompatActivity {

  String[] buylistNames = {"Room 1009", "Home", "Girlfriend", "Personal buy list", "Dog", "Friend"};

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_buylists);

    ArrayAdapter adapter = new ArrayAdapter<String>(this,
        R.layout.activity_buylistview, buylistNames);

    ListView listView = (ListView) findViewById(R.id.buylistListView);
    listView.setAdapter(adapter);
  }
}
