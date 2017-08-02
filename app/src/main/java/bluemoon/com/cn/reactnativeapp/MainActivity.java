package bluemoon.com.cn.reactnativeapp;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.v7.app.AppCompatActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    private List<ModuleBean> moduleList = new ArrayList<>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ListView listView = (ListView)findViewById(R.id.listview);
        moduleList.add(new ModuleBean("hello world", "index.android"));
        moduleList.add(new ModuleBean("props", "props"));
        moduleList.add(new ModuleBean("state", "state"));
        moduleList.add(new ModuleBean("style", "style"));
        moduleList.add(new ModuleBean("textinput", "textinput"));
        moduleList.add(new ModuleBean("scrollView", "scrollView"));
        moduleList.add(new ModuleBean("flatList", "flatList"));
        moduleList.add(new ModuleBean("sectionList", "sectionList"));
        moduleList.add(new ModuleBean("fetch", "fetch"));
        moduleList.add(new ModuleBean("navigator", "navigator"));
        moduleList.add(new ModuleBean("app", "app"));
        ListAdapter adapter = new ListAdapter(this, moduleList);
        listView.setAdapter(adapter);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == 1) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (!Settings.canDrawOverlays(this)) {
                    // SYSTEM_ALERT_WINDOW permission not granted...
                    Toast.makeText(this, "error", Toast.LENGTH_SHORT).show();
                    return;
                }
            }
        }
        MyReactActivity.startAct(MainActivity.this, "index.android");
    }

    class ListAdapter extends BaseAdapter {
        protected List<ModuleBean> list;
        protected Context context;
        public ListAdapter(Context context, List<ModuleBean> list) {
            this.list = list;
            this.context = context;
        }
        @Override
        public int getCount() {
            return list.size();
        }

        @Override
        public ModuleBean getItem(int position) {
            return list.get(position);
        }

        @Override
        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(final int position, View convertView, ViewGroup parent) {
            if (convertView == null) {
                convertView = LayoutInflater.from(context).inflate(R.layout.module_item, null);
            }
            TextView txt = (TextView)convertView.findViewById(R.id.txt);
            txt.setText(getItem(position).getDisplayName());
            convertView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                        if (!Settings.canDrawOverlays(context)) {
                            Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                                    Uri.parse("package:" + getPackageName()));
                            startActivityForResult(intent, 1);
                            return;
                        }
                    }
                    String modulePath = "js/"+getItem(position).getModuleName();
                    MyReactActivity.startAct(context, modulePath);
                }
            });
            return convertView;
        }
    }
}

