async function get_current_setting() {
  try {
    const response = await fetch(
      "https://margarita.shacknet.us/takumi_test/235/webapp/get"
    );
    const data = await response.json();
    console.log(data);

    //broker_address
    const broker_address_set = document.getElementById("broker_address");
    const broker_address_select =
      broker_address_set.getElementsByTagName("input")[0];
    if (data.mqtt.broker_address != null) {
      broker_address_select.value = data.mqtt.broker_address;
    }

    //mqtt_port
    const mqtt_port_set = document.getElementById("mqtt_port");
    const mqtt_port_select = mqtt_port_set.getElementsByTagName("input")[0];
    if (data.mqtt.mqtt_port != null) {
      mqtt_port_select.value = data.mqtt.mqtt_port;
    }

    //boot_topic
    const boot_topic_set = document.getElementById("boot_topic");
    const boot_topic_select = boot_topic_set.getElementsByTagName("input")[0];
    if (data.mqtt.publish.boot.topic != null) {
      boot_topic_select.value = data.mqtt.publish.boot.topic;
    }
    //change_config_topic
    const change_config_topic_set = document.getElementById(
      "change_config_topic"
    );
    const change_config_topic_select =
      change_config_topic_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.change_config.topic != null) {
      change_config_topic_select.value =
        data.mqtt.subscribe.change_config.topic;
    }
    //open_topic
    const open_topic_set = document.getElementById("open_topic");
    const open_topic_select = open_topic_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.open.topic != null) {
      open_topic_select.value = data.mqtt.subscribe.open.topic;
    }

    //close_topic
    const close_topic_set = document.getElementById("close_topic");
    const close_topic_select = close_topic_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.close.topic != null) {
      close_topic_select.value = data.mqtt.subscribe.close.topic;
    }

    //relay_on_topic
    const relay_on_topic_set = document.getElementById("relay_on_topic");
    const relay_on_topic_select =
      relay_on_topic_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.relay_on.topic != null) {
      relay_on_topic_select.value = data.mqtt.subscribe.relay_on.topic;
    }

    //relay_off_topic
    const relay_off_topic_set = document.getElementById("relay_off_topic");
    const relay_off_topic_select =
      relay_off_topic_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.relay_off.topic != null) {
      relay_off_topic_select.value = data.mqtt.subscribe.relay_off.topic;
    }

    //boot_message
    const boot_message_set = document.getElementById("boot_message");
    const boot_message_select =
      boot_message_set.getElementsByTagName("input")[0];
    if (data.mqtt.publish.boot.message != null) {
      boot_message_select.value = data.mqtt.publish.boot.message;
    }
    //open_message
    const open_message_set = document.getElementById("open_message");
    const open_message_select =
      open_message_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.open.message != null) {
      open_message_select.value = data.mqtt.subscribe.open.message;
    }

    //close_message
    const close_message_set = document.getElementById("close_message");
    const close_message_select =
      close_message_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.close.message != null) {
      close_message_select.value = data.mqtt.subscribe.close.message;
    }

    //relay_on_message
    const relay_on_message_set = document.getElementById("relay_on_message");
    const relay_on_message_select =
      relay_on_message_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.relay_on.message != null) {
      relay_on_message_select.value = data.mqtt.subscribe.relay_on.message;
    }

    //relay_off_message
    const relay_off_message_set = document.getElementById("relay_off_message");
    const relay_off_message_select =
      relay_off_message_set.getElementsByTagName("input")[0];
    if (data.mqtt.subscribe.relay_off.message != null) {
      relay_off_message_select.value = data.mqtt.subscribe.relay_off.message;
    }
  } catch (error) {
    console.error("Fetchエラー:", error);
  }
}
get_current_setting();
