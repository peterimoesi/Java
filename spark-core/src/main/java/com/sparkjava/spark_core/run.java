package com.sparkjava.spark_core;
import static spark.Spark.post;
import org.json.*;
import org.apache.*;

public class run {
	public static void main(String[] args) {
        post("/hash", (req, res) -> {
        	JSONObject obj = new JSONObject(req.body());
        	String requestText = obj.getString("text");
        	res.status(200);
			return org.apache.commons.codec.digest.DigestUtils.sha256Hex(requestText);
        });
    }
}
