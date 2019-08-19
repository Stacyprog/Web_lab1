<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Результат</title>
            <link rel="stylesheet" type="text/css" href="laba_style.css" />
        </head>

        <body>
        <div>
            <?php
            date_default_timezone_set('Europe/Moscow');
            $time =  date('h:i:s');
            echo "Текущее время: $time";
            ?>
        </div>
        <div>
            <?php
            $worktime = number_format((microtime(true) - $start), 4);
            echo "Время работы скрипта: $worktime сек";
            ?>
        </div>
        <div>
        <?php
        function target($result) {
            if ($result == "true") {
                  return "есть";
                  }
                  else {
                  return "нет";
                  }
            }
            $hit = target($result);
            echo "X: $x <br/>";
            echo "Y: $y <br/>";
            echo "R: $r <br/>";
            echo "Попадание: $hit <br/>";
        ?>
        </div>
        </body>
</html>