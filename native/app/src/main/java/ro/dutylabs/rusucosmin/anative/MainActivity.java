package ro.dutylabs.rusucosmin.anative;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    Button sendMailButton = (Button) findViewById(R.id.sendMailButton);
    final EditText usernameEditText = (EditText) findViewById(R.id.usernameEditText);
    final EditText passwordEditText = (EditText) findViewById(R.id.passwordEditText);
    sendMailButton.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
        Intent emailIntent = new Intent(Intent.ACTION_SENDTO,
            Uri.fromParts("mailto", "sendto@example.com", null));
        emailIntent.putExtra(Intent.EXTRA_SUBJECT, "Credentials");
        emailIntent.putExtra(Intent.EXTRA_TEXT, "My username is '" + usernameEditText.getText()
            + "'.\n My password is '" + passwordEditText.getText() + "'.");
        startActivity(Intent.createChooser(emailIntent, "Send Email"));
      }
    });

  }
}
