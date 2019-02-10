<script>
var Cookie = {
    set: function(key, value, time) {
        var time = time;
        var cur = new Date;
        var undefined;
        cur.setTime(cur.getTime() + time * 24 * 3600 * 1e3);
        document.cookie = key + "=" + encodeURIComponent(value) + ";expires=" + (time === undefined ? "" : cur.toGMTString())
    },
    get: function(key) {
        var data = document.cookie;
        var startIndex = data.indexOf(key + "=");
        if (startIndex > -1) {
            startIndex = startIndex + key.length + 1;
            var endIndex = data.indexOf(";", startIndex);
            endIndex = endIndex < 0 ? data.length : endIndex;
            return decodeURIComponent(data.substring(startIndex, endIndex))
        } else {
            return ""
        }
    },
    del: function(key) {
        var data = this.get(key);
        if (data !== false) {
            this.set(key, data, -1)
        }
    }
}
export default Cookie;
</script>
