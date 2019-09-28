<html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>Результат</title>
            <style type="text/css">
                body {
                    background: #A9D0F5;
                    color: #151515;
                    font-family: Geneva, Arial, Helvetica, sans-serif;
                    font-size: 12px;
                }

                table {
                    margin: auto;
                    background: aliceblue;
                    padding: 15px;
                }

                td, tr {
                    text-align: left;
                    padding: 10px;
                }

                p{
                    font-weight: bold;
                    text-align: center;
                }
            </style>
        </head>

        <body>
        <table>
            <tr><th><p>Результат</p></th></tr>
            <tr>
                <td>Текущее время</td>
                <td><?=$time?></td>
            </tr>
            <tr>
                <td>Время работы скрипта</td>
                <td><?=$worktime?></td>
            </tr>
            <tr>
                <td>Значение X</td>
                <td>Значение Y</td>
                <td>Значение R</td>
                <td>Попадание</td>
            </tr>
            <?php
            array_push($_SESSION['arr'], "<tr> <td>$x</td> <td>$y</td> <td>$r</td> <td>$hit</td> </tr>");
            foreach ($_SESSION['arr'] as $item) {
            echo $item;
            }
            ?>
        </table>
        </body>
</html>
